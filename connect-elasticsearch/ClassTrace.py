from r_utils import *


class Trace():
    def __init__(self, trace_info):
        self.src = trace_info['src_host']
        self.dest = trace_info['dest_host']
        self.hops = trace_info['hops']
        self.timestamp = convertToDatetime(trace_info['timestamp'])

    def __str__(self):
        return '{}: {} -> {}: '.format(self.timestamp, self.src, self.dest)
    
    def printHops(self):
        return '{} - {} with hops in between: {}'.format(self.src, self.dest, self.hops)