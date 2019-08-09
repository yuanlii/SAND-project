
## SAND Project Documentation

Documentation about Kibana dashboards that I built - [Google doc](https://docs.google.com/document/d/1nAe8ns0JAlod3-Ps3MVgpCwBGvdAMf8Fewt0Qjg33u0/edit)

[Google shared Drive](https://drive.google.com/drive/folders/0APwP9-3JRjJOUk9PVA)

[project plan](https://docs.google.com/document/d/117k5lJFDr0HDE37nXOEXt_15TkzJpj83CuVI9dcjQBI/edit)

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


## Learn ElasticSearch
[Udemy tutorial](https://www.udemy.com/elasticsearch-complete-guide/learn/v4/t/lecture/7470444?start=0)


## Python pull data from ElasticSearch
[python codes](https://github.com/UM-UROP-Network-Analytics/database) to pull data from ElasticSearch


## MISC
How to remove venv accidentally upload to github:
```
$ git rm -r --cached venv*
```
the will need to git add ., git commit, git push again.
