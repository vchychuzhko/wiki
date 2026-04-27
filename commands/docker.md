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
docker exec -it <container-id-or-name> bash
```

## docker compose

Rebuild docker compose images and containers:

```bash
docker compose up -d --build --force-recreate
```
