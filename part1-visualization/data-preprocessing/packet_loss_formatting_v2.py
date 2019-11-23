import json

'''
process source packet loss data in JSON for d3 visualization
'''

class PacketLoss():
    def __init__(self):
        self.source = ''
        self.destination = ''
        self.packet_loss = ''

        self.source_host = ''
        self.destination_host = ''

    
    def import_pl_data(self, data):
        self.source = self.safe_import(data, 'src')
        self.destination = self.safe_import(data, 'dest')
        self.packet_loss = self.safe_import(data, 'packet_loss')

        self.source_host = self.safe_import(data, 'src_host')
        self.destination_host = self.safe_import(data, 'dest_host')


    def safe_import(self, data, key_name):
        try:
            safe_string = data['_source'][key_name]
            targetVariable = safe_string
        except:
            targetVariable = ''
        return targetVariable


    def print_basics(self):
        print('basic packet loss info:', self.source, '|', self.source_host, '|', self.destination,'|', self.destination_host, '|', self.packet_loss)



def load_data(path):
    with open (path,'r') as f:
        data = json.load(f)
    return data


def write_data(path, data):
    with open(path,'w') as f:
        json.dump(data,f)


def generate_pl_object_from_file():
    ''' 
    Source data format as `data['hits']['hits'][i]['_source'][key_name]`.
    There are i records of packet loss in the returned .json data.
    For each record, we new a PacketLoss() object and store data.
    '''

    json_data = load_data("../data/sample_packet_loss.json")
    data = json_data['hits']['hits'] # return a list of objects

    pl_objects = []
    for i in range(len(data)):
        pl_object = PacketLoss()
        pl_object.import_pl_data(data[i])
        pl_objects.append(pl_object)

    print('Take a look at the first packet loss object ...')
    pl_objects[0].print_basics()
    
    return pl_objects
    

def get_pl_nodes(pl_objects):
    nodes = set()
    for pl_object in pl_objects:
        nodes.add(pl_object.source)
        nodes.add(pl_object.destination)
    return nodes


def get_pl_links(pl_objects):
    links = []
    for pl_object in pl_objects:
        link = {}
        link['source'] = pl_object.source
        link['dest'] = pl_object.destination
        link['value'] = pl_object.packet_loss

        links.append(link)

    return links
        

def format_pl_node(pl_objects):
    nodes = get_pl_nodes(pl_objects)
    nodes_lst = []
    for n in nodes:
        d = {}
        d['name'] = n
        nodes_lst.append(d)
    return nodes_lst


def get_format_data(ouput_path):
    '''
    NEED TO FORMAT AS BELOW FOR D3:
    packet_loss = {
        'nodes' 
        'links'
    } 
    '''
    dct = {}
    pl_objects = generate_pl_object_from_file()
    print('There are %d objects of packet loss.' % len(pl_objects))

    links = get_pl_links(pl_objects)
    nodes = format_pl_node(pl_objects)
    
    dct['nodes'] = nodes
    dct['links'] = links

    write_data(ouput_path, dct)

    return dct


def map_host_ip():
    ''' get mapping for host names and IP'''

    host_mapping = {}
    pl_objects = generate_pl_object_from_file()
    print('There are %d records of packet loss in total.' % len(pl_objects))

    for pl_object in pl_objects:
        source = pl_object.source
        destination = pl_object.destination
        source_host = pl_object.source_host
        destination_host = pl_object.destination_host

        host_mapping[source_host] = source
        host_mapping[destination_host] = destination

    return host_mapping


if __name__ == '__main__':

    get_format_data('../data/pl_v2.json')
    host_mapping = map_host_ip()
    





    




