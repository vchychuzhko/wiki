---
title: AWS & Kubernetes
description: Guide for AWS and Kubernetes
---

# AWS & Kubernetes

## Installation

Install AWS CLI:

```bash
sudo snap install aws-cli --classic
```

Install Kubernetes CLI:

```bash
sudo snap install kubectl --classic
```

## Configuration

Enter your access keys and region:

```bash
aws configure
```

Connect to your cluster:

```bash
aws eks update-kubeconfig --region eu-central-1 --name <cluster-name>
```

## Commands

List available nodes:

```bash
kubectl get pods -n core
```

Enter node:

```bash
kubectl exec --stdin --tty <node-name> -n core -- /bin/bash
```
