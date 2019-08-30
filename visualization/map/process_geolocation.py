import os
import json
import sys

PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))

def load_data(path):
    with open (path,'r') as f:
        data = json.load(f)
    return data

def write_data(path, data):
    with open(path,'w') as f:
        json.dump(data,f)

source_data_path = os.path.join(PROJECT_ROOT, "./data/ps_meta_sample.json")
data = load_data(source_data_path)

# geo_map= {}
# hosts, geolocations = [],[]
geo_mappings = []
for record in data['hits']['hits']:
    try:
        mapping = {}
        geolocation = record['_source']['geolocation']
        host = record['_source']['host']

        mapping['host'] = host
        mapping['coordinates'] = geolocation

        geo_mappings.append(mapping)

    except: 
        print("Oops!",sys.exc_info()[0],"occured.")


write_data('./data/geolocation_sample.json', geo_mappings)


# format as geojson 
# `coordinates` format as [longitude, latitude]

geojson = {
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "geometry" : {
            "type": "Point",
            "coordinates": [float(d['coordinates'].split(',')[1]), float(d['coordinates'].split(',')[0])]
            },
        "properties" : {
            "name":d['host']
        },
     } for d in geo_mappings]
}


write_data('./data/geolocation_sample.geojson', geojson)
# print (geojson)





