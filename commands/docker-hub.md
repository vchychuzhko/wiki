---
title: Docker Hub
description: List of Docker Hub commands
---

# Docker Hub

## docker build

Build image:

```bash
docker build --network=host -t <vendor>/<image>:<version> .
```

***network** flag is a workaround for ufw network conflict*

## docker push

Push image:

```bash
docker push <vendor>/<image>:<version>
```
