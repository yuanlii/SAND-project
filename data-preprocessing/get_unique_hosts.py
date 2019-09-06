
import json
import re

path = './data/sample_src_host.json'
with open (path,'r') as f:
    data = json.load(f)

hosts = data['aggregations']['langs']['buckets']
host_names = [d['key'] for d in hosts if re.match(r'\w',d['key'])]
# host_names = [d['key'] for d in hosts]
print(len(host_names))

    

