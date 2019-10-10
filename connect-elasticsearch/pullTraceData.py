#!/usr/bin/python
import elasticsearch
from elasticsearch import helpers
# from elasticsearch.serializer import JSONSerializer
# from elasticsearch.serializer import TextSerializer

from datetime import datetime, timedelta
import time
import numpy as np
import pandas as pd
# from config import config
import os
import os.path
from pathlib import Path
import certifi
import secrets
# import r_utils as ut
from r_utils import *
from ClassTrace import *

import json
import copy



def connectDB():
    '''connect to ElasticSearch db'''
    try:
        es = elasticsearch.Elasticsearch(['atlas-kibana.mwt2.org:9200'], http_auth=(
            secrets.user, secrets.password), timeout=60, scheme= 'ssl')
        print("Connected", es.info())
        return es

    except Exception as ex:
        print("Error:", ex)


def getSourceDestinationPairs(from_date, to_date):
    """
    Get all source and destination pairs
    present in the given time range 

    Args:
        es: Elasticsearch 
        index: INdex in Elastic Search

    Returns:
        Datafame of all source destination pairs
    """
    es = connectDB()

    query = {
        "size":0,
        "query":{
            "bool":{
                "must":[
                    {
                        "range":{
                            "timestamp":{
                                "gte":from_date,
                                "lte":to_date,
                                "format":"yyyy/MM/dd||epoch_millis"
                            }
                        }
                    },
                    {
                        "term":{
                            "dest_production":{
                                "value":"true"
                            }
                        }
                    },
                    {
                        "term":{
                            "src_production":{
                                "value":"true"
                            }
                        }
                    }
                ]
            }
        },
        "aggs":{
            "sources":{
                "terms":{
                    "field":"src",
                    "size":9999
                },
                "aggs":{
                    "destinations":{
                        "terms":{
                            "field":"dest",
                            "size":9999
                        }
                    }
                }
            }
        }
    }

    data = es.search('ps_trace', body=query)

    sources = []
    destinations = []

    for source in data['aggregations']['sources']['buckets']:
        src = source['key']
        for destination in source['destinations']['buckets']:
            sources.append(src)
            destinations.append(destination['key'])

    return pd.DataFrame({"Source":sources,
                        "Destinations":destinations})



def getTraceData(from_date,to_date,size):
    """ 
    Query small amount of trace data 
    """
    es = connectDB()

    query = {
        "size":size,
        "query":{
            "bool":{
                "must":[
                    {
                        "range":{
                            "timestamp":{
                                "gte":from_date,
                                "lte":to_date,
                                "format":"yyyy/MM/dd||epoch_millis"
                            }
                        }
                    },
                    {
                        "term":{
                            "dest_production":{
                                "value":"true"
                            }
                        }
                    },
                    {
                        "term":{
                            "src_production":{
                                "value":"true"
                            }
                        }
                    }
                ]
            }
        }
    }

    data = es.search('ps_trace', body=query)

    # traces = []
    # for result in data['hits']['hits']:    
    #     trace_info = result['_source']
    #     trace = Trace(trace_info)
    #     traces.append(trace)
    
    # return traces

    # cache requested data
    timestr = time.strftime("%Y%m%d-%H%M%S")
    cacheDict('../data/cached_trace_data'+ timestr +'.json', data)
    print('Successfully cached trace data.')


def loadTraceFromCached(file_name):
    '''load trace data from cached elasticsearch query '''
    with open(os.path.join('../data', file_name)) as f:
        t = f.read()
        data = json.loads(t)

    traces = []
    for result in data['hits']['hits']:    
        trace_info = result['_source']
        trace = Trace(trace_info)
        traces.append(trace)
        
    return traces


def cacheDict(filePath, dictionary):
    path = Path(filePath)
    path.write_text( json.dumps(dictionary) )


def loadJsonData(path):
    with open (path,'r') as f:
        data = json.load(f)
    return data


def outputTraceCSV(traces, output_path):
    """ format trace instances to dataframe """

    trace_dic = {}
    srcs = [trace.src for trace in traces]
    dests = [trace.dest for trace in traces]
    timestamps = [trace.timestamp for trace in traces]
    
    # for field in ['timestamp','src','dest']:
    trace_dic['timestamp'] = timestamps
    trace_dic['src'] = srcs
    trace_dic['dest'] = dests

    # output to csv file
    trace_df = pd.DataFrame(trace_dic)
    trace_df.to_csv(output_path, index=False)
    print('successfully output')


# TODO: need to discard pandas, using json or dictionary directly (refactor)
def formatLngLat(traces):
    '''
    format as csv file: `lng1,lng2,lat1,lat2`
    '''
    geolocation = loadGeolocation()
    
    lng1 = [loadLatLng(geolocation, trace.src)[1] for trace in traces]
    lng2 = [loadLatLng(geolocation, trace.dest)[1] for trace in traces]

    lat1 = [loadLatLng(geolocation, trace.src)[0] for trace in traces]
    lat2 = [loadLatLng(geolocation, trace.dest)[0] for trace in traces]

    d = {'lng1':lng1, 'lng2':lng2, 'lat1':lat1, 'lat2':lat2}
    trace_coordinate_df = pd.DataFrame(d)

    return trace_coordinate_df


# TODO:
def loadLatLng(dataframe,host):
    '''load latitude and longitude from '''
    lat = dataframe.loc[dataframe['host'] == host].lat
    lng = dataframe.loc[dataframe['host'] == host].lng
    return (lat, lng)


# TODO:
def loadGeolocation():
    ''' load geolocation mapping data '''
    geolocation = pd.read_csv('../data/geolocation.csv')
    # TODO: convert dataframe objects to dictionary
    
    return geolocation


# TODO: necessary?
class Host(object):
    def __init__(self, 
                 host = None,
                 lng = None,
                 lat = None):

        self.host = host
        self.lng = lng
        self.lat = lat

    # def loadHostData(self, file_path):
    #     data = loadJsonData(file_path)
    #     for record in data['hits']['hits']:
    #         try:
    #             geolocation = record['_source']['geolocation']
    #             self.lng = float(geolocation.split(',')[1])
    #             self.lat = float(geolocation.split(',')[0])
    #             self.host = record['_source']['host']
            
    #         except:
    #             raise ValueError("Invalid geolocation.")
    
    # def to_dict(self):
    #     """Serializes this instance to a Python dictionary."""
    #     output = copy.deepcopy(self.__dict__)
    #     return output

    # def to_json_string(self):
    #     """Serializes this instance to a JSON string."""
    #     return json.dumps(self.to_dict(), indent=2, sort_keys=True) + "\n"


# TOOD: load geolocation data from json source file
def createGeoMapping(file_path):
    """ 
    Load geolocation data from source json file to dictionary.
    format should look like  `{'host':{'lng':..., 'lat':...}, ...}`

    Args:
      file_path: source json file from ps_meta 

    Returns:
      mapping of host and its coordinates `lng, lat`

    """
    mapping = {}
    data = loadJsonData(file_path)
    for record in data['hits']['hits']:
        try:
            geolocation = record['_source']['geolocation']
            lng = float(geolocation.split(',')[1])
            lat = float(geolocation.split(',')[0])
            host = record['_source']['host']
            mapping[host] = {'lng':lng, 'lat':lat}
        except:
            raise ValueError("Invalid geolocation.")
    return mapping


# TODO: query ElasticSearch to get ps_meta, then to get host and its coordinate info.
# error: json.decoder.JSONDecodeError: Expecting ',' delimiter: line 4135 column 32 (char 133191)


if __name__ == '__main__':

    # print(getSourceDestinationPairs(ut.getDateFormat(), ut.getDateFormat(delta=90)))
    
    ### get and cached trace data 
    # getTraceData("2019/09/29","2019/09/30",100)

    # traces = loadTraceFromCached('cached_trace_data20191002-215354.json')

    # timestr = time.strftime("%Y%m%d-%H%M%S")  # print current datetime 
    # outputTraceCSV(traces, '../data/traceData_' + timestr +'.csv')

    createGeoMapping('../data/ps_meta_sample.json')


    

    
