# About this file:
# this file is used to process source packet loss data; and format it in certain JSON that is able to feed in d3 visualization

import json

class FormatPacketLoss:
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


    def get_format_data(self, ouput_path):
        ''' format into nodes and links for d3 visualization'''
        pl = self.get_data()
        dct = {}
        links, nodes = [], []

        for i in range(len(pl)):
            l = self.get_pl_link(i)
            n = self.format_pl_node(i)
            links.append(l)
            nodes += n

        dct['nodes'] = nodes
        dct['links'] = links

        self.write_data(ouput_path,dct)
        return dct
        

    def map_host_ip(self):
        ''' get mapping for host names and IP'''
        host_mapping = {}

        pl = self.load_data("./data/sample_packet_loss.json")
        size = len(pl['hits']['hits'])
        print('There are %d records of packet loss in total.' % size)
        for i in range(size):

            src = pl['hits']['hits'][i]['_source']['src']
            src_host = pl['hits']['hits'][i]['_source']['src_host']

            dest = pl['hits']['hits'][i]['_source']['dest']
            dest_host = pl['hits']['hits'][i]['_source']['dest_host']
            
            host_mapping[src_host] = src
            host_mapping[dest_host] = dest

        return host_mapping
    


if __name__ == '__main__':
    format_packet_loss = FormatPacketLoss()
    # format_packet_loss.get_format_data('./data/pl.json')

    host_mapping = format_packet_loss.map_host_ip()
    print(host_mapping)
    
    




