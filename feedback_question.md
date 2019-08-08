<<<<<<< HEAD
=======
## Feedback 

### Meeting Feedbacks 02/15/2019:

关注的data: how many unique combinations of pairs that have data

最终实现的功能：
- 1. time: ideally can allow users to select different periods of time to see the network dissection, e.g. last seven days
- 2. dashboards: main dashboards + inside dashboard to display details

__interesting questions to answer__:
- how many trace routes between each unique pairs
- how often do they change between each unique pairs
- how many hops inside each trace route => find similar pairs with difference -> goal: want to know whether the difference causing the packet_loss
- avg. packet loss of each unique pairs |packet loss

__Thoughts__:
want to look at the same pair
=> to compare the traces and packet_loss:
- trace similar with slight difference -> maybe it's the difference sites (hops) that are causing the packet loss
- packet loss


### Meetings 03/01/2019:
Tasks:
- only care about those packet loss with less than 1 => separate packet_loss with <1 and =1 (meaning completely loss: potentially server error)
- "top hit" mean? => figure out how to visualize the average packet loss
Screen Shot 2019-03-01 at 15.22.45.png
- work on ps_trace: how frequently that hops路径 changes (separate)

Feedback:
- data table is good => as long as it's separated
- heatmap is confusing => figure out what does that exactly mean!
- piechart is good => as long as it's using average packet loss
- tag cloud is good


### [task]: check how to get the unique pairs between src and dest?
- approach 1: create scripted field => 我的理解：可以建一个新的field? （recommend)
- approach 2: vega/ vega lite manipulate data for visualization => quite complex; Vega是底层语言，要建比较费时间，且UI不是很好
- approach 3: use KOIOSSIAN （recommend)

__相关__：
Kibana "aggregation" function: https://www.elastic.co/guide/en/elasticsearch/reference/6.5/search-aggregations.html
- "transformation"


MISC:
Kibana using 6.5 version
there is less than 150 src_host, dest_host => data table need to load them all

- problematic paths if all happened at the same time --> maybe went through the same hops || narrow down problems的方法

- overlap "green" paths and "orange" paths, and figure out which hops are in common between them --> potential problematic hops || narrow down problems的方法

- keywords: 
timeseries, correlation, similarity, anomaly detection


## Question Lists
count指的是什么 => 以12hrs作为interval| 是指在这12小时之内出现的packet loss的record吗？（包括packet loss为0的record吗？） （亟待回答的问题）**


