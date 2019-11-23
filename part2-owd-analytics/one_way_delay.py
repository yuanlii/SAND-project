#!/usr/bin/python
import os
import os.path
from pathlib import Path
import time
import re

import elasticsearch
from elasticsearch import helpers

import secrets
import json
import pandas as pd

import plotly.express as px

class Owd():
    def __init__(self, info):
        self.src_host = info['src_host']
        self.dest_host = info['dest_host']
        self.timestamp = info['timestamp']
        self.delay_mean = info['delay_mean']
        self.delay_sd = info['delay_sd']
        self.delay_median = info['delay_median']
    

    def __str__(self):
        return f"{self.src_host} -> {self.dest_host} || delay mean: {self.delay_mean}"
    
    def printOwd(self):
        print("Print delay statistics.")
        return f"delay mean: {self.delay_mean} | delay sd: {self.delay_sd} | delay median: {self.delay_median}"



def cacheDict(filePath, dictionary):
    '''utility function to cache data as dictionary '''
    path = Path(filePath)
    path.write_text( json.dumps(dictionary) )


def parseFieldData(objects, field_name):
    ''' utility function to convert class object to an entire dictionary'''
    # use `vars` to convert class to dictionary
    return [ vars(object)[field_name] for object in objects ] 


def outDfToCSV(df,file_name):
    ''' Output pandas dataframe to csv file.'''
    df.to_csv('../data/' + file_name + '.csv', index = False)


def connectDB():
    '''connect to ElasticSearch db'''
    try:
        es = elasticsearch.Elasticsearch(['atlas-kibana.mwt2.org:9200'], http_auth=(
            secrets.user, secrets.password), timeout=60, scheme= 'ssl')
        print("Connected", es.info())
        return es

    except Exception as ex:
        print("Error:", ex)


def getOwdData(from_date, to_date):
    ''' get one-way-delay with specified time range'''
    es = connectDB()

    query = {
        "size":1000, # TODO: 0
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

    data = es.search('ps_owd', body=query)
    # TODO: es.scan

    # cache requested data
    timestr = time.strftime("%Y%m%d-%H%M%S")
    cacheDict('../data/cached_owd_data'+ timestr +'.json', data)
    print('Successfully cached owd data.')

    return data


def loadOwdFromCached(file_name):
    '''load owd data from cached elasticsearch query '''
    with open(os.path.join('../data', file_name)) as f:
        t = f.read()
        data = json.loads(t)

    owd_lst = []
    for dct in data['hits']['hits']:
        info = dct['_source']
        owd = Owd(info)
        owd_lst.append(owd)
    
    return owd_lst


def formatOwd(owd_lst):
    '''format owd data using pandas dataframe'''

    df_dict = {}
    for field_name in ['src_host','dest_host','timestamp','delay_mean','delay_median','delay_sd']:
        df_dict[field_name] = parseFieldData(owd_lst, field_name)

    return pd.DataFrame(df_dict)


def outputFormattedOwd(file_name):
    '''Setup pipeline to format owd data from json file to csv file.'''
    owd_lst = loadOwdFromCached(file_name)
    match = re.findall(r'\d{8}', file_name)
    if match:
        date = match.pop()
    
    df = formatOwd(owd_lst)
    outDfToCSV(df,'owd_' + date)
    return df
    

def getUniqueSrcDestDelay(df):
    '''Group owd data by unique src-dest pair with averaged delay statistics '''
    return df.groupby(['src_host','dest_host']).mean()


# plot distribution of delay_mean, delay_median and delay_sd
def plotHist(df, x_field = "delay_mean" , y_field = "delay_mean"):
    ''' Plot histogram of owd data.'''
    fig = px.histogram(df, x = x_field, y = y_field, marginal="rug", hover_data=df.columns)
    fig.show()


# plot heatmap
def plotHeatmap():
    import plotly.graph_objects as go

    owd_lst = loadOwdFromCached('cached_owd_data20191009-215910.json')

    delay_means = [owd.delay_mean for owd in owd_lst]
    sources = [owd.src_host for owd in owd_lst]
    dests = [owd.dest_host for owd in owd_lst]

    fig = go.Figure(data=go.Heatmap(
                    z=delay_means,
                    x=dests, 
                    y=sources))
    fig.show()


# TODO: plot sankey map
# TODO: more to get correlation of delay_mean, delay_median, delay_sd (scatter plot?)



if __name__ == '__main__':
    ## connect db and get owd data
    # owd_data = getOwdData("2019/10/05","2019/10/06")

    owd_df = outputFormattedOwd('cached_owd_data20191009-215910.json')
    # print(getUniqueSrcDestDelay(owd_df))

    ## plot histogram
    # plotHist(owd_df)
    # plotHist(owd_df,"delay_median", "delay_median")
    # plotHist(owd_df,"delay_sd", "delay_sd")

    plotHeatmap()



    
    






            