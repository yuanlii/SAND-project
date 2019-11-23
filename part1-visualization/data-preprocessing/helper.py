# helper functions
import json

def load_data(path):
    with open (path,'r') as f:
        data = json.load(f)
    return data

def write_data(path, data):
    with open(path,'w') as f:
        json.dump(data,f)