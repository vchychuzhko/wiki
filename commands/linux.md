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

Search for a file:

```bash
find ./<path> -type f -name "<file>"
```

## ssh-keygen

Generate an SSH key:

```bash
ssh-keygen
```

## sudo

Run command as another user:

```bash
sudo -u <user> <command>
```

## lsattr / chattr

Check file attributes:

```bash
lsattr -a
```

Remove the immutable flag from a file:

```bash
chattr -i <file>
```
