---
title: NSQ
description: NSQ service bus
date: 2018-07-25T03:02:18-07:00
draf: false
bref: NSQ is a perfect service bus for in-house usage
toc: false
sidebar: false
type: app
chart: nsq
repo: https://github.com/nsqio/nsq
web: https://nsq.io
logo: logo.png
---
{{<app>}}

NSQ is a light-weight pub/sub service bus, written in Go and it's perfect for simple in-house installation.

{{<warning "Authentication is not supported as of now.">}} 

| Section | Param | Default | Description |
|---------|-------|---------|-------------|
| **general** |
|| **namespace** | `default` | Namespace to install app into |
|| **replicas** | `1` | Number of `nsqd` replicas |
| **docker** |
|| **image** | `gohomeio/nsq` | Image name | 
|| **tag** | `latest` | Image tag | 
|| **pullPolicy** | `IfNotPresent` | When to pull an image |
| **resources** | 
|| **cpu.requests.lookup** | `100m` | CPU request for `lookup` service | 
|| **cpu.requests.nsqd** | `100m` | CPU request for `nsqd` | 
|| **cpu.limits.lookup** | `100m` | CPU limit for `lookup` service | 
|| **cpu.limits.nsqd** | `100m` | CPU limit for `nsqd` |
|| **memory.requests.lookup** | `20Mi` | Memory request for `lookup` service | 
|| **memory.requests.nsqd** | `20Mi` | Memory request for `nsqd` | 
|| **memory.limits.lookup** | `30Mi` | Memory limit for `lookup` service | 
|| **memory.limits.nsqd** | `30Mi` | Memory limit for `nsqd` |
| **inbound** |
|| **clusterNS** | `cluster.local` | k8s default DNS name |
|| **lookup.tcp** | `4160` | `lookup` service tcp port |
|| **lookup.http** | `4161` | `lookup` service http port |
|| **nsqd.tcp** | `4160` | `nsqd` service tcp port |
|| **nsqd.http** | `4161` | `nsqd` service http port |