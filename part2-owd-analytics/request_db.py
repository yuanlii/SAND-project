import requests
import json

import elasticsearch
from elasticsearch import helpers

from datetime import datetime, timedelta
import time
import numpy as np

import secrets 



HEADERS = {
    'Content-Type': 'application/json'
    # 'Content-Type': 'text/html'
}

uri = "https://atlas-kibana.mwt2.org:5601/ps_packet_loss"+"/_search"


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

query = json.dumps(
    {
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
)

# r = requests.get(uri, headers=HEADERS, data=query, auth = (secrets.user, secrets.password)).json()
r = requests.get(uri, headers=HEADERS, data=query, auth = (secrets.user, secrets.password))
print(r)

# resp = requests.get('https://atlas-kibana.mwt2.org/', auth = (user, password))
# print(resp.status_code)
# print(resp.text) # html



