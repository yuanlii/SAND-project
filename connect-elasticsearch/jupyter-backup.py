import time
import json

import elasticsearch
from elasticsearch import helpers

user = 'yuanlii'
password = 'LAURALI203'

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


# TODO: cache generator
# timestr = time.strftime("%Y%m%d-%H%M%S")
# cacheDict('./output/cached_owd_data'+ timestr +'.json', results)

owd_lst = []
for dct in results:
    info = dct['_source']
    owd = Owd(info)
    owd_lst.append(owd)


# TODO: visualize data