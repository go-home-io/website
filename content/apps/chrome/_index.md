---
title: Chrome
description: Headless Chrome
date: 2018-09-24T19:07:30-07:00
draft: false
bref: Headless Chrome instance with debug enabled
toc: false
sidebar: false
type: app
chart: chrome
repo: 
web: https://www.chromium.org
logo: logo.png
---
{{<app>}}

Chrome (well, technically Chromium) running with a headless mode enabled could
be used for a [camera/web]({{<relref "/devices/camera/web.md">}}) rendering.

### Configuration options

| Section | Param | Default | Description |
|---------|-------|---------|-------------|
|| **nameOverride** || Use this to override name of the chart |
| **general** |
|| **namespace** | `default` | Namespace to install app into |
| **docker** |
|| **image** | `gohomeio/chrome` | Docker image |
|| **tag** | `1.0.0` | Docker image version |
|| **pullPolicy** | `IfNotPresent` | When to pull an image |
| **resources** |
|| **cpu.requests** | `100m` | CPU request for the browser |
|| **cpu.limits** | `600m` | CPU limit for the browser |
|| **memory.requests** | `100Mi` | Memory request for the browser |
|| **memory.limits** | `500Mi` | Memory limit for the browser |
