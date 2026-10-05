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
    restart: unless-stopped
    ports:
      - "8096:8096/tcp"
      - "7359:7359/udp"
    volumes:
      - jellyfin_config:/config
      - /home/user/jellyfin/media:/media

volumes:
  jellyfin_config:
```

- *Set your actual user's name for the media volume*

## Usage

Navigate to - http://localhost:8096

*Replace **localhost** with the relevant IP address or hostname.*
