---
title: Docker
description: List of Docker commands
---

# Docker

## docker ps

List all containers:

```bash
docker ps
```

## docker exec

Enter container:

```bash
docker exec -it <container> bash
```

## docker logs

Show and follow container logs from 1 minute before:

```bash
docker logs --since=1m --follow <container>
```

## docker compose

Rebuild docker compose images and containers:

```bash
docker compose up -d --build --force-recreate
```

## Docker Hub

### docker build

Build image:

```bash
docker build --network=host -t <vendor>/<image>:<version> .
```

***network** flag is a workaround for ufw network conflict*

### docker push

Push image:

```bash
docker push <vendor>/<image>:<version>
```
