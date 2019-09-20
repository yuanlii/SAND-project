# About this file:
# this file is used to process source trace data
# * input: query results copied from Kibana dev tool 
# * output: /data/trace_data_all.json --> formated as `nodes`, `links`

from datetime import datetime, timedelta
import psycopg2
from psycopg2 import IntegrityError
# from config import config
import os
import os.path
import json


# params = config()
# conn = psycopg2.connect(**params)
# cur = conn.cursor()
# my_query = {}
# #successfully connected to local postgres db
# print ('Database connection established at ' + str(datetime.now()))


class formatTrace:
    def __init__(self):
        pass 
    

    def load_data(self, path):
        with open (path,'r') as f:
            data = json.load(f)
        return data
    

    def write_data(self,path,data):
        with open(path,'w') as f:
            json.dump(data,f)


    def get_data(self):
        trace = self.load_data("./data/sample_trace.json")
        data = trace['hits']['hits']
        return data


    def get_trace_data(self,i):
        '''input is the index of the returned records'''

        trace = self.load_data("./data/sample_trace.json")
        res = []
        hops = trace['hits']['hits'][i]['_source']['hops']
        src = trace['hits']['hits'][i]['_source']['src']
        dest = trace['hits']['hits'][i]['_source']['dest']

        # hops
        res.append(src)
        res += hops 
        res.append(dest)
        
        return res


    def format_trace_data(self,i):
        '''based on function get_trace_data '''
        nodes = []
        hops = self.get_trace_data(i)
        for hop in hops:
            node = {}
            node['name'] = hop
            nodes.append(node)
        return nodes

    
    def format_trace_links(self,i):
        links = []
        hops = self.get_trace_data(i)
        cur = hops[0]
        for i in range(len(hops)-1):
            link = {}
            link['source'] = cur
            link['dest'] = hops[i+1]
            links.append(link)
            cur = hops[i+1]
        return links
    

    def get_sample_trace_data(self):
        '''used to combine all trace records to single one json file'''
        d ,nodes, links = {}, [], []
        data = self.get_data()
        for i in range(len(data)):
            n = self.format_trace_data(i)
            l = self.format_trace_links(i)
            nodes += n
            links += l
        
        d['nodes'] = nodes
        d['links'] = links

        self.write_data('./data/trace_data_all.json',d)
        return d
    
    


if __name__ == '__main__':
    fd = formatTrace()
    fd.get_sample_trace_data()


