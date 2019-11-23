from faker import Faker
import pandas as pd

import os
import json
import sys
import random


def generate_latlng(n, output_path):
    '''generate fake data using Faker '''
    fake = Faker()
    fake.seed(4321)

    # generate src data
    lat1_lst = []
    lng1_lst = []
    for _ in range(n):
        lat = fake.latlng()[0]
        lng = fake.latlng()[1]
        lat1_lst.append(lat)
        lng1_lst.append(lng)

    # generate dest data
    lat2_lst = []
    lng2_lst = []
    for _ in range(n):
        lat = fake.latlng()[0]
        lng = fake.latlng()[1]
        lat2_lst.append(lat)
        lng2_lst.append(lng)

    dct = {}
    dct['lat1'] = lat1_lst
    dct['lat2'] = lat2_lst
    dct['lng1'] = lng1_lst
    dct['lng2'] = lng2_lst

    df = pd.DataFrame(dct)
    df.to_csv(output_path, index = False)

    return df


def load_data(path):
    with open (path,'r') as f:
        data = json.load(f)
    return data

def write_data(path, data):
    with open(path,'w') as f:
        json.dump(data,f)


def generate_random_link(source_data_path, output_data_path):

    # source_data_path = os.path.join(PROJECT_ROOT, "./data/ps_meta_sample.json")
    data = load_data(source_data_path)

    mapping = {}
    for record in data['hits']['hits']:
        try:
            geolocation = record['_source']['geolocation']
            host = record['_source']['host']
            mapping[host] = geolocation

        except: 
            # print("Oops!",sys.exc_info()[0],"occured.")
            pass
    
    # TODO: generate random permutations between hosts
    hosts = list(mapping.keys())
    ans = permute(hosts,mapping) # returns a list of lists: [[A,B],[A,C],... ]
    # print(len(ans))

    sample_ans = random.sample(ans, 20)

    # TODO: format res into pandas dataframe with 4 columns `lat1, lng1, lat2, lng2`
    df = format_latlng(sample_ans)
    df.to_csv(output_data_path)
    return df


def permute(arr, mapping):
    if not arr:
        return 
    ans = []
    visited = [False] * len(arr)
    dfs(arr,ans,[],visited, mapping)
    return ans

def dfs(arr,ans,temp,visited, mapping):
    if len(temp) == 2:
        ans.append(temp[:])
        return 

    else:
        pre = '#'
        for i in range(len(arr)):
           if arr[i] != pre and not visited[i]:
               pre = arr[i]
               geo_link = mapping[arr[i]]
               temp.append(geo_link)
               visited[i] = True
               dfs(arr,ans,temp,visited,mapping)
               temp.pop()
               visited[i] = False


def format_latlng(arr):
    lat1_lst = []
    lng1_lst = []
    lat2_lst = []
    lng2_lst = []
    for geo_link in arr:
        src_latlng = geo_link[0]
        dest_latlng = geo_link[1]

        src_lat = src_latlng.split(',')[0]
        src_lng = src_latlng.split(',')[1]

        dest_lat = dest_latlng.split(',')[0]
        dest_lng = dest_latlng.split(',')[1]

        lat1_lst.append(src_lat)
        lng1_lst.append(src_lng)

        lat2_lst.append(dest_lat)
        lng2_lst.append(dest_lng)
    
    dct = {}
    dct['lat1'] = lat1_lst
    dct['lat2'] = lat2_lst
    dct['lng1'] = lng1_lst
    dct['lng2'] = lng2_lst

    df = pd.DataFrame(dct)
    return df


if __name__ == '__main__':
    # generate_latlng(10, './data/sample_latlng.csv')
    
    input_data_path = "./data/ps_meta_sample.json"
    output_data_path = './data/sample_latlng.csv'
    df = generate_random_link(input_data_path, output_data_path)
    print(df)

"""
desired format looks like below:
link = [
    {"src":[lat,lng], "dest":[lat2,lng2]},
    {"src":[lat,lng], "dest":[lat2,lng2]},
    {"src":[lat,lng], "dest":[lat2,lng2]}
]
"""

"""
src = [A,B,C,D,E]
A -> B
A -> C
A -> D
"""


