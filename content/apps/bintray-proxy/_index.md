---
title: Bintray Proxy
description: Providers download proxy
date: 2018-10-14T21:26:42-07:00
draft: false
bref: Providers download proxy for setup shared plugins
toc: false
sidebar: false
type: app
chart: bintray-proxy
repo: 
web:
logo: logo.png
---
{{<app>}}

If you've chosen to use shared RWX persistent storage for storing providers,
this application might come in handy to avoid errors due to parallel access to
same providers.

### Configuration options

| Section | Param | Default | Description |
|---------|-------|---------|-------------|
|| **nameOverride** || Use this to override name of the chart |
|| **sharedStorage** | `gh-go-home` | Name of the shared PVC used by `go-home` |
| **general** |
|| **namespace** | `default` | Namespace to install app into |
| **docker** |
|| **image** | `gohomeio/bintray-proxy` | Docker image |
|| **tag** | `1.0.3` | Docker image version |
|| **pullPolicy** | `IfNotPresent` | When to pull an image |
| **resources** |
|| **cpu.requests** | `100m` | CPU request for the proxy |
|| **cpu.limits** | `100m` | CPU limit for the proxy |
|| **memory.requests** | `50Mi` | Memory request for the proxy |
|| **memory.limits** | `100Mi` | Memory limit for the proxy |
| **inbound** |
|| **port** | `9090` | HTTP API port |
|| **type** | `ClusterIP` | Type of exposed service. Defaults to cluster-only |
