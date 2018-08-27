---
title: InfluxDB
description: Time series database
date: 2018-08-12T23:43:18-07:00
draft: false
bref: Fast and reliable backend for state history storage
toc: false
sidebar: false
type: app
chart: influxdb
repo: https://github.com/influxdata/influxdb
web: https://www.influxdata.com/time-series-platform/influxdb/
logo: logo.png
---
{{<app>}}

InfluxDB is a high-performance data store for time-series data. During provisioning

{{<warning "For now default retention policy is used, which is 7 days.">}}

### Configuration options

| Section | Param | Default | Description |
|---------|-------|---------|-------------|
|| **nameOverride** || Use this to override name of the chart |
| **general** |
|| **namespace** | `default` | Namespace to install app into |
|| **storageSize** | `2Gi` | Size of the storage | 
| **db** |
|| **name** | `gohome` | Database name to create |
| **user** |
|| **login** || Regular user login | 
|| **password** || Regular user password |
| **docker** |
|| **isArm** | `true` | Flag indicating whether this is an ARM cluster | 
|| **imageAmd** | `influxdb:1.6.1-alpine` | AMD docker image | 
|| **imageArm** | `arm32v7/influxdb:1.6.1` | ARM docker image |
|| **pullPolicy** | `IfNotPresent` | When to pull an image | 
| **resources** | 
|| **cpu.requests** | `200m` | CPU request for the db | 
|| **cpu.limits** | `400m` | CPU limit for the db | 
|| **memory.requests** | `256Mi` | Memory request for the db | 
|| **memory.limits** | `512Mi` | Memory limit for the db | 
| **inbound** |
|| **port** | `8080` | HTTP API port |
|| **type** | `ClusterIP` | Type of exposed service. Defaults to cluster-only | 
|| **clusterNS** | `cluster.local` | k8s default DNS name |