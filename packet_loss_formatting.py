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


class formatPl:
    def __init__(self):
        pass

    def load_data(self,path):
        with open (path,'r') as f:
            data = json.load(f)
        return data


    def write_data(self, path, data):
        with open(path,'w') as f:
            json.dump(data,f)


    def get_data(self):
        trace = self.load_data("./data/sample_packet_loss.json")
        data = trace['hits']['hits']
        return data


    def get_pl_data(self,i):
        '''input is the index of the returned records'''

        link = {}
        pl = self.load_data("./data/sample_packet_loss.json")
        src = pl['hits']['hits'][i]['_source']['src']
        dest = pl['hits']['hits'][i]['_source']['dest']
        packet_loss = pl['hits']['hits'][i]['_source']['packet_loss']

        return pl, src, dest, packet_loss


    def get_pl_node(self,i):
        nodes = set()
        pl, src, dest, packet_loss = self.get_pl_data(i)

        nodes.add(src)
        nodes.add(dest)
        
        return nodes 


    def format_pl_node(self,i):
        nodes = self.get_pl_node(i)
        nodes_lst = []
        for n in nodes:
            d = {}
            d['name'] = n
            nodes_lst.append(d)
        return nodes_lst


    def get_pl_link(self,i):
        link = {}
        pl, src, dest, packet_loss = self.get_pl_data(i)
        link['source'] = src
        link['dest'] = dest
        link['value'] = packet_loss
        return link



fp = formatPl()
pl = fp.get_data()
dct = {}
links = []; nodes = []
for i in range(len(pl)):
    l = fp.get_pl_link(i)
    n = fp.format_pl_node(i)
    links.append(l)
    nodes += n

dct['nodes'] = nodes
dct['links'] = links

fp.write_data('./data/pl.json',dct)


