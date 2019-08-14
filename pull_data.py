#!/usr/bin/python
import elasticsearch
from elasticsearch import helpers
from datetime import datetime, timedelta
import time
import numpy as np
import psycopg2
from psycopg2 import IntegrityError
from config import config
import os
import os.path
from pathlib import Path

#connect to the database

es = elasticsearch.Elasticsearch(['atlas-kibana.mwt2.org:9200'],timeout=10)

now = datetime.utcnow()
curr_mon = now.month
curr_day = now.strftime("%d")
curr_year = now.strftime("%Y")
curr_hr = now.strftime("%H")
curr_min = now.strftime("%M")
curr_sec = now.strftime("%S")
start_date = '20180101T000000Z'
end_date = curr_year + now.strftime("%m") + curr_day + 'T' + curr_hr + curr_min + curr_sec + 'Z'

my_index = ["ps_packetloss"]

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

results = elasticsearch.helpers.scan(es, query=my_query, index=my_index, raise_on_error = True, request_timeout=10, size=100)
print ('Results compiled at ' + str(datetime.now()))


my_index = ["ps_packetloss"]
params = config()
conn = psycopg2.connect(**params)
cur = conn.cursor()
my_query = {}
#successfully connected to local postgres db
print ('Database connection established at ' + str(datetime.now()))


#determine start and end times
now = datetime.utcnow()
curr_mon = now.month
curr_day = now.strftime("%d")
curr_year = now.strftime("%Y")
curr_hr = now.strftime("%H")
curr_min = now.strftime("%M")
curr_sec = now.strftime("%S")
end_date = curr_year + now.strftime("%m") + curr_day + 'T' + curr_hr + curr_min + curr_sec + 'Z'
cur.execute("SELECT * FROM rawpacketdata limit 1")
#if None, raw table empty, start from beginning of year
if cur.fetchone() is None:
    start_date = '20180101T000000Z'
#else start from 1 second past latest entry in raw table
else:
    #This will return linux epoch timestamp in milliseconds. Casting as a string.
    cur.execute("SELECT CAST(1000*extract(epoch FROM(max(time_stamp + interval '1 sec'))) AS text ) FROM rawpacketdata")
    start_date = cur.fetchone()[0]
    print("cur.fetchone is ", start_date)
print ('Dates set at ' + str(datetime.now()))


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

# fail to get results - socket connection error
for result in results:
    print(result)
