import time
import json

import elasticsearch
from elasticsearch import helpers

user = 'yuanlii'
password = 'LAURALI203'

class Owd():
    def __init__(self, info):
        self.src_host = info['src_host']
        self.dest_host = info['dest_host']
        self.timestamp = info['timestamp']
        self.delay_mean = info['delay_mean']
        self.delay_sd = info['delay_sd']
        self.delay_median = info['delay_median']
    

    def __str__(self):
        return "{} -> {} || delay mean: {}".format(self.src_host, self.dest_host, self.delay_mean)
    
    def printOwd(self):
        print("Print delay statistics.")
        return "delay mean: {} | delay sd: {} | delay median: {}".format(self.delay_mean, self.delay_sd, self.delay_median)

def connectDB():
    '''connect to ElasticSearch db'''
    try:
        es = elasticsearch.Elasticsearch(['atlas-kibana.mwt2.org:9200'], http_auth=(
            user, password), timeout=60, scheme= 'ssl')
        print("Connected", es.info())
        return es

    except Exception as ex:
        print("Error:", ex)

es = connectDB()


# get unique pair of src-dest and their average `delay_mean`

def getAvgDelayMean(from_date,to_date):
    '''Get average delay_mean for each unique source-destination pair within the given time range.'''
    get_avg_delay_mean_query = {
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
                            "field":"src_host",
                            "size":9999
                        },
                        "aggs":{
                            "destinations":{
                                "terms":{
                                    "field":"dest_host",
                                    "size":9999
                                },
                                "aggs":{
                                    "average_delay_mean":{
                                        "avg":{
                                            "field":"delay_mean"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }


    results = elasticsearch.helpers.scan(
        es,
        query= get_avg_delay_mean_query,
        index="ps_owd"
    )
    return results


results = getAvgDelayMean("2019/10/05","2019/10/06")
# TODO: return results include all fields, expected `src`,`dest`,`delay_mean`


for r in results:
    print(r)
    break


# TODO: take too long to finish running

def getAvgDelayMean(results):
    ''' Get average delay mean for each source-destination pair.'''
    src_hosts = []
    dest_hosts = []
    delay_means = []

    for r in results:
        src_hosts.append(r['_source']['src_host'])
        dest_hosts.append(r['_source']['dest_host'])
        delay_means.append(r['_source']['delay_mean'])

    return pd.DataFrame({'source': src_hosts, 'destination': dest_hosts, 'avg_delay_mean': delay_means})    

getAvgDelayMean(results).head()


def serialize(dct, info):
#     k = (src,dest)
#     dct = {(src1,dest1):20, (src1,dest2):10 ...}
    k = (info['_source']['src_host'], info['_source']['dest_host'])
    dct[k] = info['_source']['src_host']['delay_mean']
    return dct[k]

dct = {}
for info in results:
    serialize(dct, info)


# TODO: serialize generator => need to convert to dictionary first
# alternative: serialize a class => still need to convert to dictionary

# TODO: multiprocessing
n_threads = 7
pool = mp.Pool(n_threads)

dct = {}
# pool.map(func, range(10))
pool.map(serialize(dct,info), results['_source'])

owd_dict = {i: info['_source'] for i,info in enumerate(results)}


# TODO: serialize generator
# timestr = time.strftime("%Y%m%d-%H%M%S")
# cacheDict('./output/cached_owd_data'+ timestr +'.json', results)

owd_lst = []
for dct in results:
    info = dct['_source']
    owd = Owd(info)
    owd_lst.append(owd)


# TODO: visualize data


