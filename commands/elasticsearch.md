---
title: Elasticsearch
description: List of Elasticsearch commands
---

# Elasticsearch

## Config

```bash
sudo subl /etc/elasticsearch/jvm.options
```

*Look for "JVM heap size".*

## Version

```bash
curl -X GET 'http://localhost:9200'
```

## Remove all indexes

```bash
curl -X DELETE 'http://localhost:9200/_all'
```

## Hotfix for flood error

```bash
curl -X PUT "http://localhost:9200/_cluster/settings" -H 'Content-Type: application/json' -d '{
  "transient": {
    "cluster.routing.allocation.disk.watermark.flood_stage": "100%",
    "cluster.routing.allocation.disk.watermark.high": "100%",
    "cluster.routing.allocation.disk.watermark.low": "100%"
  }
}'
```

*Works only in the current session.*
