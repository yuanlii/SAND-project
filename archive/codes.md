08/14/2019:

packet_loss_formatting.py:
- used copy&paste packet loss data from ElasticSearch
- packet_loss value fakened; TODO: needs to learn ElasticSearch query to get meaningful packet loss values, e.g., set packet_loss in (0,1,0.99) range

pl_trace_check.py:
- combine codes for formatting packet loss data and trace data
- data is based on copy&paste from ElasticSearch - TODO: `data access`


trace_data_formatting.py:
- used copy&paste trace data from ElasticSearch
- formatting data to feed into d3 