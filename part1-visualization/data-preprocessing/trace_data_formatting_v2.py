from helper import *
import datetime
import pandas as pd
from ClassTrace import *


def loadTraceData(trace_data_path = "../data/sample_trace.json"):
    ''' create trace instances and convert millseconds to datetime object'''
    data = load_data(trace_data_path)
    traces = []
    for result in data['hits']['hits']:
        trace_info = result['_source']
        trace = Trace(trace_info)
        traces.append(trace)

    return traces


def convertToDatetime(ms):
    ''' milleseconds to datetime object '''
    return datetime.datetime.fromtimestamp(ms/1000.0)


def formatToDf(traces):
    trace_dic = {}
    srcs = [trace.src for trace in traces]
    dests = [trace.dest for trace in traces]
    timestamps = [trace.timestamp for trace in traces]
    
    # for field in ['timestamp','src','dest']:
    trace_dic['timestamp'] = timestamps
    trace_dic['src'] = srcs
    trace_dic['dest'] = dests

    trace_df = pd.DataFrame(trace_dic)
    trace_df.to_csv('../data/trace_data_09232019.csv', index=False)
    print('successfully output')


# note:
# timedelta can directly return the previous n days' data
# TODO: get data of `in the past 15 minutes` (or 30 min)


if __name__ == '__main__':
    traces = loadTraceData()
    for trace in traces:
        print(trace)

    # output formatted data to file
    formatToDf(traces)
