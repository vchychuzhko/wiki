---
title: Jellyfin
description: Instruction for Jellyfin
---

# Jellyfin

## Installation

Docker compose file:

```yaml
services:
  jellyfin:
    image: jellyfin/jellyfin
    container_name: jellyfin
    ports:
      - 8096:8096/tcp
      - 7359:7359/udp
    volumes:
      - /srv/jellyfin/config:/config
      - /srv/jellyfin/cache:/cache
      - /srv/media:/media
    restart: unless-stopped
```

## Usage

Navigate to - http://localhost:8096

*Replace **localhost** with the relevant IP address or hostname.*
