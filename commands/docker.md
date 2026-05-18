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

Show and follow container logs from 1m before:

```bash
docker logs --since=1m --follow <container>
```

## docker compose

Rebuild docker compose images and containers:

```bash
docker compose up -d --build --force-recreate
```
