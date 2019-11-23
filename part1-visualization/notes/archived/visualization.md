## Visualization
### Visualize ps_trace
[Document working progress](https://docs.google.com/document/d/1r85wqKrblzQIzbx5o5FY3UVE9ZQeRRPZgTeqLi1sMok/edit)

__Vega visualization__:
- 可以参考这些blog posts
- vega examples: https://vega.github.io/vega/examples/arc-diagram/

## Vega visualization
visualize - 选择图形 - vega 
useful tutorial: 
- https://www.youtube.com/watch?v=5giacrHVYe4
- https://www.youtube.com/watch?v=towTppinOD8
- https://www.youtube.com/watch?v=mMhnGjp8oOI

network viz 尝试：https://vega.github.io/editor/#/examples/vega/edge-bundling

working urls:
https://vega.github.io/vega-lite/docs/data.html
https://discuss.elastic.co/t/how-to-correctly-use-local-json-for-vega-and-kibana/120253/4
https://www.elastic.co/cn/blog/sankey-visualization-with-vega-in-kibana
https://www.youtube.com/results?search_query=kibana%2C+vega%2C+load+data

### [task]: check how to get the unique pairs between src and dest?
- approach 1: create scripted field => 我的理解：可以建一个新的field? （recommend)
- approach 2: vega/ vega lite manipulate data for visualization => quite complex; Vega是底层语言，要建比较费时间，且UI不是很好
- approach 3: use KOIOSSIAN （recommend)

相关：
Kibana "aggregation" function: https://www.elastic.co/guide/en/elasticsearch/reference/6.5/search-aggregations.html
- "transformation"

scripts用途：define a script which will generate the values (per document).

### 参考documentation:
Lucene expressions：https://www.elastic.co/guide/en/elasticsearch/reference/6.5/modules-scripting-expression.html
Query string syntax: https://www.elastic.co/guide/en/elasticsearch/reference/6.5/query-dsl-query-string-query.html#query-string-syntax
Query string query:
https://www.elastic.co/guide/en/elasticsearch/reference/6.5/query-dsl-query-string-query.html

Painless Scripting Language: https://www.elastic.co/guide/en/elasticsearch/reference/6.5/modules-scripting-painless.html

2.Vega & Vega-Lite VISUALIZATION GRAMMARS: 
- https://vega.github.io/
- https://vega.github.io/vega/tutorials/

3.KOIOSSIAN™ Solutions and Services: http://www.koiossian.com/
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