---
title: VolantMQ
description: MQTT broker
date: 2018-07-31T11:35:41-07:00
draft: false
bref: VolantMQ is a high performance MQTT broker that aims to be fully compliant with MQTT specs 
toc: false
sidebar: false
type: app
chart: volantmq
repo: https://github.com/VolantMQ/volantmq
web:
logo:
---
{{<app>}}

VolantMQ is a reliable MQTT broker, written in Go and supporting most of the MQTT specs. 

It supports authentication and perfect for RPis since its low resources consumption.  

### Configuration options

| Section | Param | Default | Description |
|---------|-------|---------|-------------|
|| **nameOverride** || Use this to override name of the chart |
| **general** |
|| **namespace** | `default` | Namespace to install app into |
| **docker** |
|| **image** | `gohomeio/volantmq` | Image name | 
|| **tag** | `1.0.0` | Image tag | 
|| **pullPolicy** | `IfNotPresent` | When to pull an image |
| **resources** | 
|| **cpu.requests** | `100m` | CPU request for the broker | 
|| **cpu.limits** | `200m` | CPU limit for the broker | 
|| **memory.requests** | `40Mi` | Memory request for the broker | 
|| **memory.limits** | `120Mi` | Memory limit for the broker | 
| **inbound** |
|| **http** | `8080` | HTTP port. Used for health-checks only |
|| **mqtt** | `1883` | MQTT port, exposed through service | 
|| **type** | `ClusterIP` | Type of exposed service. Defaults to cluster-only | 
|| **clusterNS** | `cluster.local` | k8s default DNS name |
| **auth**|| `gohome: password` | List of users for the broker |
