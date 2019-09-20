from helper import *
import datetime

class Trace():
    def __init__(self, trace_info):
        self.src = trace_info['src']
        self.dest = trace_info['dest']
        self.hops = trace_info['hops']
        self.timestamp = convertToDatetime(trace_info['timestamp'])

    
    def __str__(self):
        return '{}: {} -> {}: '.format(self.timestamp, self.src, self.dest)
    
    def printHops(self):
        return '{} - {} with hops in between: {}'.format(self.src, self.dest, self.hops)



def loadTraceData(trace_data_path = "../data/sample_trace.json"):

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



# note:
# timedelta can directly return the previous n days' data
# TODO: get data of `in the past 15 minutes` (or 30 min)


if __name__ == '__main__':
    traces = loadTraceData()
    # print(convertTime(traces))
    for trace in traces:
        print(trace)
