
### Connect Elasticsearch db from local device

Use below settings to set up authentification and connect to Elasticsearch db:
* need to install certifi to handle authentification automatically
```
es = elasticsearch.Elasticsearch(
    ['atlas-kibana.mwt2.org:9200'],
    http_auth=('your_user_name', 'your_pass_word'),
    scheme="https",
    port=443,
)
```
- [reference1](https://docs.objectrocket.com/elastic_python_examples.html)
- [python elasticsearch client documentation](https://elasticsearch-py.readthedocs.io/en/master/)

more detailed tutorial:
[Elasticsearch SQL 简介（附练习示例）— 第 1 部分](https://www.elastic.co/cn/blog/an-introduction-to-elasticsearch-sql-with-practical-examples-part-1)

### Connect to Postgres using psycopg2
Mac Mojave system install psycopg2 failed, can try to install psycopg2-binary instead:
```
pip install psycopg2-binary
```

[ElasticSearch serializer](https://github.com/elastic/elasticsearch-py/blob/master/elasticsearch/serializer.py)