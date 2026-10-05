---
title: Dockhand
description: Instruction for Dockhand
---

# Dockhand

## Installation

Download and install:

```bash
docker run -d \
  --name dockhand \
  --restart unless-stopped \
  -p 3000:3000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v dockhand_data:/app/data \
  fnsys/dockhand:latest
```

## Usage

Navigate to - https://localhost:3000

*Replace **localhost** with the relevant IP address or hostname.*

