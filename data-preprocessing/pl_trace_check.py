# About this file:
# This file is used to combine source data of packet loss and trace; intended to format the data into a specific JSON format to fit into d3 visualization.

from datetime import datetime, timedelta
import psycopg2
from psycopg2 import IntegrityError
from config import config
import os
import os.path
import json

from trace_data_formatting import formatTrace
from packet_loss_formatting import formatPl

params = config()
conn = psycopg2.connect(**params)
cur = conn.cursor()
my_query = {}
#successfully connected to local postgres db
print ('Database connection established at ' + str(datetime.now()))

d = {}

ft = formatTrace()
trace = ft.get_data()
nodes, links = [], []

for i in range(len(trace)):
    n = ft.format_trace_data(i)
    l = ft.format_trace_links(i)
    nodes += n
    links += l



fp = formatPl()
pl = fp.get_data()

# links, nodes = [], []
for i in range(len(pl)):
    l = fp.get_pl_link(i)
    n = fp.format_pl_node(i)
    links.append(l)
    nodes += n


d['nodes'] = nodes
d['links'] = links


with open('./data/pl_trace.json','w') as f:
    json.dump(d,f)

    



