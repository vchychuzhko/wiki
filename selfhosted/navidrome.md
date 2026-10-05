---
title: Navidrome
description: Instruction for Navidrome
---

# Navidrome

## Installation

Docker compose file:

```yaml
services:
  navidrome:
    image: deluan/navidrome:latest
    ports:
      - "4533:4533"
    restart: unless-stopped
    volumes:
      - navidrome_data:/data
      - /home/user/navidrome/music:/music:ro

volumes:
  navidrome_data:
```

- *Set your actual user's name for the music volume*

### Android Client

Wavio - https://github.com/Joel-Mercier/wavio

## Usage

Navigate to - http://localhost:4533

*Replace **localhost** with the relevant IP address or hostname.*
