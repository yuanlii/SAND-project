from datetime import datetime, timedelta
import psycopg2
from psycopg2 import IntegrityError
from config import config
import os
import os.path
import json


params = config()
conn = psycopg2.connect(**params)
cur = conn.cursor()
my_query = {}
#successfully connected to local postgres db
print ('Database connection established at ' + str(datetime.now()))


# load sample json data
with open ("sample_packet_loss.json",'r') as f:
    data = json.load(f)

# locate records
records = data['hits']['hits']
print(records[0]['_index'])


# TODO: 
#updates the raw traceroute data table
def updateRaw( item ):
    rt_src = item['_source']['src']
    rt_dest = item['_source']['dest']
    rt_loss = item['_source']['packet_loss']
    rt_ts = item['_source']['timestamp']
    rt_ts = rt_ts / 1000
    #match appropriate format for the database timestamps
    format_ts = time.strftime("%Y-%m-%d %H:%M:%S-0000", time.gmtime(rt_ts))

    try:
        #try to insert the new data into the raw data table
        cur.execute("INSERT INTO rawpacketdata (src, dest, loss, timestamp) VALUES (%s, %s, %s, %s)", (rt_src, rt_dest, rt_loss, format_ts))
        conn.commit()

    except IntegrityError:
        #if IntegrityError, failed due to key violation (src, dest, timestamp triple already in table)
        #in that case, continue (skip to next iteration of loop)
            print("INTEGRITY ERROR")
            conn.rollback()
            pass
