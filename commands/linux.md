---
title: Linux
description: List of Linux commands
---

# Linux

## hostname

Display system IP addresses:

```bash
hostname -I
```

## grep

Search for text:

```bash
grep --exclude-dir={<excluded-directories>} -rnw './<path>' -e '<text>'
```

## find

Search for file:

```bash
find ./<path> -type f -name "<file>"
```

## ssh-keygen

Generate SSH key:

```bash
ssh-keygen
```

## sudo -u

Run command as another user:

```bash
sudo -u <user> <command>
```
