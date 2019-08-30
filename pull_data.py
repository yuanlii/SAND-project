#!/usr/bin/python
import elasticsearch
from elasticsearch import helpers
from elasticsearch.serializer import JSONSerializer
from elasticsearch.serializer import TextSerializer

from datetime import datetime, timedelta
import time
import numpy as np
import psycopg2
from psycopg2 import IntegrityError
from config import config
import os
import os.path
from pathlib import Path
import certifi
import secrets

# import ipdb;ipdb.set_trace()


# class SetEncoder(JSONSerializer):
#     def default(self, obj):
#         if isinstance(obj, set):
#             return list(obj)
#         if isinstance(obj, bytes):
#             return 'CustomSomethingRepresentation'
#         return JSONSerializer.default(self, obj)


#connect to the database
try:
    # es = elasticsearch.Elasticsearch(
    #     ['https://atlas-kibana.mwt2.org'],
    #     http_auth=(secrets.user, secrets.password),
    #     # port=9200,
    #     port=5601,
    #     timeout = 10
    # )
    es = elasticsearch.Elasticsearch([{'host': '192.170.227.31', 'port': 9200}],http_auth=(secrets.user, secrets.password), timeout = 60)
    print ("Connected", es.info())
except Exception as ex:
    print ("Error:", ex)


"""
start_date = '20180101T000000Z'
now = datetime.utcnow()
curr_mon = now.month
curr_day = now.strftime("%d")
curr_year = now.strftime("%Y")
curr_hr = now.strftime("%H")
curr_min = now.strftime("%M")
curr_sec = now.strftime("%S")
end_date = curr_year + now.strftime("%m") + curr_day + 'T' + curr_hr + curr_min + curr_sec + 'Z'

my_index = ["ps_packetloss"]

#build and run the query
my_query = {
    "size":1,
    "_source": {
        "include": [ 'src','dest', 'packet_loss', 'timestamp', 'src_host', 'dest_host', 'src_site', 'dest_site']
    },
    'query':{
        'bool':{
            'must':[
                    {'range': {'timestamp': {'gte': start_date, 'lt': end_date}}},
                    ]

    }
},
}


results = elasticsearch.helpers.scan(es, query=my_query, index=my_index, raise_on_error = True, request_timeout=100000, size=1000)
print ('Results compiled at ' + str(datetime.now()))


# try get some data
# res = es.get(index='ps_packet_loss',id=42)['_source']
# print(res)
"""

