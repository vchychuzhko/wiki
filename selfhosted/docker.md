---
title: Docker
description: Instruction for Docker
---

# Docker

## Installation

Run the convenience script:

```bash
curl -fsSL https://get.docker.com | bash
```

## Configure

To run docker as a non-root user, create the docker group (if not yet exists):

```bash
sudo groupadd docker
```

Add your user to the docker group:

```bash
sudo usermod -aG docker $USER
```

*Log out and log back in so that your group membership is re-evaluated.*

## Usage

Confirm installation:

```bash
sudo systemctl status docker
```

*See [Docker Commands](/commands/docker.md)*
