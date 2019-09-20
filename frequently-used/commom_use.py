# load sample json data
with open ("sample_data.json",'r') as f:
    data = json.load(f)

# dump data into json file
with open('trace_data.json','w') as f:
    json.dump(d,f)


