---
title: NSQ
description: NSQ service bus
date: 2018-07-25T03:02:18-07:00
draft: false
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

NSQ is a light-weight pub/sub service bus, written in Go and it's perfect for
simple in-house installation.

{{<warning "Authentication is not supported as of now.">}}

### Configuration options

| Section | Param | Default | Description |
|---------|-------|---------|-------------|
|| **nameOverride** || Use this to override name of the chart |
| **general** |
|| **namespace** | `default` | Namespace to install app into |
| **docker** |
|| **image** | `gohomeio/nsq` | Image name |
|| **tag** | `1.1.0` | Image tag |
|| **pullPolicy** | `IfNotPresent` | When to pull an image |
| **resources** |
|| **cpu.requests** | `300m` | CPU request for the service |
|| **cpu.limits** | `400m` | CPU limit for the service |
|| **memory.requests** | `100Mi` | Memory request for the service |
|| **memory.limits** | `200Mi` | Memory limit for the service |
| **inbound** |
|| **clusterNS** | `cluster.local` | k8s default DNS name |
|| **tcp** | `4160` | `nsqd` service tcp port |
|| **http** | `4161` | `nsqd` service http port |
