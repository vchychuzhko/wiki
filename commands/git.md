---
title: Git
description: List of Git commands
---

# Git

## git commit

Amend changes to last commit without editing the message:

```bash
git commit --amend --no-edit
```

## git stash

Restore deleted stash:

```bash
git stash apply <stash-hash>
```

## git rebase

Start interactive rebase:

```bash
git rebase -i "<commit-hash>^"
```

## git branch

Rename current local branch:

```bash
git branch -m <new-name>
```

Push and rename remote branch:

```bash
git push origin :<old-name> <new-name>
```

Remove branch locally:

```bash
git branch -D <branch>
```

Remove branch on remote:

```bash
git push <remote> :<branch>
```

Clean up local branch list (remove all merged branches locally):

```bash
git branch --merged | egrep -v "(^\*|master|staging)" | xargs git branch -D
```

## git remote

Add remote URL:

```bash
git remote add origin <repository>
```

Change remote URL:

```bash
git remote set-url origin <repository>
```

## git diff

Save the last commit to patch:

```bash
git diff HEAD^ HEAD > diff.patch
```

Save difference between two files to patch:

```bash
diff -Naur <old-version> <new-version> > diff.patch
```

## git config

Set username:

```bash
git config --global user.name "<name>"
```

Set user email:

```bash
git config --global user.email "<email>"
```

Ignore file owner modification:

```bash
git config core.fileMode false
```

## git tag

List tags:

```bash
git tag -l
```

Create tag locally:

```bash
git tag <tag>
```

Upload tag to remote:

```bash
git push origin <tag>
```

Remove tag locally:

```bash
git tag -d <tag>
```

Remove tag on remote:

```bash
git push origin :refs/tags/<tag>
```
