import os
import json
import sys
import pandas as pd
from helper import load_data, write_data


class ProcessGeo:
    def __init__(self, source_data_path):
        self.data = load_data(source_data_path)

    def process_json(self, output_path):
        geo_mappings = []
        for record in self.data['hits']['hits']:
            try:
                mapping = {}
                geolocation = record['_source']['geolocation']
                host = record['_source']['host']

                mapping['host'] = host
                mapping['coordinates'] = geolocation

                geo_mappings.append(mapping)

            except: 
                print("Oops!",sys.exc_info()[0],"occured.")

        write_data(output_path, geo_mappings)
        return geo_mappings

    
    def process_geojson(self, input_path='./data/geolocation_sample.json', output_path='./data/geolocation_sample.geojson'):
        # format as geojson 
        # `coordinates` format as [longitude, latitude]

        geo_mappings = self.process_json(input_path)
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
        write_data(output_path, geojson)


    def process_csv(self, output_path):
        dct = {}
        hosts, lngs, lats = [], [], []

        for record in self.data['hits']['hits']:
            try:
                geolocation = record['_source']['geolocation']
                lng = float(geolocation.split(',')[1])
                lat = float(geolocation.split(',')[0])

                host = record['_source']['host']
                hosts.append(host)
                lngs.append(lng)
                lats.append(lat)

            except:
                pass

        dct['host'] = hosts
        dct['lng'] = lngs
        dct['lat'] = lats

        df = pd.DataFrame(dct)
        df.to_csv(output_path, index = False)

        return df


if __name__ == '__main__':
    PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))
    source_data_path = os.path.join(PROJECT_ROOT, "./data/ps_meta_sample.json")

    geo_process = ProcessGeo(source_data_path)
    
    # geo_process.process_geojson(
    #     input_path = './data/geolocation_sample.json',
    #     output_path = './data/geolocation_sample.geojson'
    # )

    geo_process.process_csv(output_path='./data/geolocation.csv')





