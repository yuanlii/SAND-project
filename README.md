
## SAND Project Documentation
### Self-expectation
1. data visualization real-world practice
2. time series anomaly dection  => 参考Ilija github


### Building dashboards in Kibana
- Kibana dashboard: http://atlas-kibana.mwt2.org
- Kibana dev dashboard: http://atlas-kibana-dev.mwt2.org --> cannot open outside of UM network
  - username: atlas
  - password: BlackMirror

[Description of project](https://mail.google.com/mail/u/0/#section_query/has%3Ayellow-star/FMfcgxwBVMlsdZrRPcdqJvFPCtddJzDs)

[Slack page](https://um-net-analy.slack.com/messages/DFT725D9P/)


UM Elk:
From UM campus networks you should be able to access our ELK instance at AGLT2:  http://atgrid.grid.umich.edu/app/kibana
- the credentials to login to the UM Elk is 'admin/QuarkNuggets8'


### google doc data viz idea
[Link](https://docs.google.com/document/d/1C6TU4CeRWACnS4nvKuWLn8oeIWjXKiuA0uhTnbJ_PKM/edit)


### weekly Meeting
Friday 1pm 


## Co-workers Intro
Ilia在做什么：University of Chicago, 在做一个Machine Learning (ML) online platform 可以给reseacher方便地run jupyter lab.
- 用于运行大量data, 使用到GPU
- 可以使用所有database里的data (包括PerfSONAR)

网址：https://www.atlas-ml.org/ (need to log in with CERN account)
* Alternatives: 
  - https://codas.slateci.net/
  - https://codas.slateci.net
  - my service: https://codas.slateci.net/services.html => CHECK jupyter notebook

From Ilija:
You would basically log in into it (if you have CERN account, if not you should use https://codas.slateci.net or  https://ml.maniac.uchicago.edu/), I would approve you and then you would be able to quickly create a personal JupyterLab instance.

This instance can access all of the Elasticsearch data and is equipped with GPUs if you need them for a machine learning algorithms.

- keywords: pull ElasticSearch data; ML computing with GPU
- Jupyter lab instance - Private instance is a better option.
- potential problem:
  - pw of Jupyter notebook instance to log in? -> It is the one you gave when you created it…


## Vega visualization
visualize - 选择图形 - vega 
useful tutorial: 
- [tutorial1](https://www.youtube.com/watch?v=5giacrHVYe4)
- [tutorial2](https://www.youtube.com/watch?v=towTppinOD8)
- [tutorial3](https://www.youtube.com/watch?v=mMhnGjp8oOI)

[network viz 尝试](https://vega.github.io/editor/#/examples/vega/edge-bundling)

working urls:
- [url1](https://vega.github.io/vega-lite/docs/data.html)
- [url2](https://discuss.elastic.co/t/how-to-correctly-use-local-json-for-vega-and-kibana/120253/4)
- [url3](https://www.elastic.co/cn/blog/sankey-visualization-with-vega-in-kibana)
- [url4](https://www.youtube.com/results?search_query=kibana%2C+vega%2C+load+data)

### [task]: check how to get the unique pairs between src and dest?
- approach 1: create scripted field => 我的理解：可以建一个新的field? （recommend)
- approach 2: vega/ vega lite manipulate data for visualization => quite complex; Vega是底层语言，要建比较费时间，且UI不是很好
- approach 3: use KOIOSSIAN （recommend)

相关：
[Kibana "aggregation" function](https://www.elastic.co/guide/en/elasticsearch/reference/6.5/search-aggregations.html)
- "transformation"

scripts用途：define a script which will generate the values (per document).

### 参考documentation:
[Lucene expressions](https://www.elastic.co/guide/en/elasticsearch/reference/6.5/modules-scripting-expression.html)
[Query string syntax](https://www.elastic.co/guide/en/elasticsearch/reference/6.5/query-dsl-query-string-query.html#query-string-syntax)
[Query string query](https://www.elastic.co/guide/en/elasticsearch/reference/6.5/query-dsl-query-string-query.html)
[Painless Scripting Language](https://www.elastic.co/guide/en/elasticsearch/reference/6.5/modules-scripting-painless.html)

2.Vega & Vega-Lite VISUALIZATION GRAMMARS: 
- https://vega.github.io/
- https://vega.github.io/vega/tutorials/

3.[KOIOSSIAN™ Solutions and Services](http://www.koiossian.com/):
-> 老师用的visualization package | 比较复杂，需研究

__其他工具__：
工具集合&useful links: https://vega.github.io/
polestar在线编辑器（可预览）：https://vega.github.io/polestar/
data pipeline: https://idl.cs.washington.edu/projects/lyra/app/


__做 Visualization 参考__: 
=> Vega Lite可以提供更加flexible的syntax语句！ 相比直接点击Kibana按钮 | Give it a try :）

可以做 | [Sankey Visualization with Vega in Kibana 6.2](https://www.elastic.co/blog/sankey-visualization-with-vega-in-kibana)


__其他参考__:
[Custom Vega Visualizations in Kibana 6.2](https://www.elastic.co/blog/custom-vega-visualizations-in-kibana)

[vega examples](https://vega.github.io/vega/examples/): --> 有专门针对network data的visualization!

[vega documentation](https://vega.github.io/vega/docs/)

[Data Manipulation Transforms | Vega Lite](https://github.com/vega/vega/wiki/Data-Transforms):
--> 只有有限的transformation 方法 => 可以尝试是否能实现所需功能 ～


not quite possible to count the unique pairs of two columns directly in Kibana: https://discuss.elastic.co/t/distinct-count-of-2-fields/53278/5



## Visualization
### Visualize ps_trace
[Document working progress](https://docs.google.com/document/d/1r85wqKrblzQIzbx5o5FY3UVE9ZQeRRPZgTeqLi1sMok/edit)

__Vega visualization__:
- 可以参考这些blog posts
- vega examples: https://vega.github.io/vega/examples/arc-diagram/


## Learn ElasticSearch
[Udemy tutorial](https://www.udemy.com/elasticsearch-complete-guide/learn/v4/t/lecture/7470444?start=0)


## Python pull data from ElasticSearch
[python codes]((https://github.com/UM-UROP-Network-Analytics/database)) to pull data from ElasticSearch



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




## MISC
How to remove venv accidentally upload to github:
```
$ git rm -r --cached venv*
```
the will need to git add ., git commit, git push again.
