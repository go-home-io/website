---
title: OpenSky
description: OpenSky network feeder
date: 2018-09-22T15:51:54-07:00
draft: false
bref: OpenSky network data feeder with in-build dump1090-mutability utils
toc: false
sidebar: false
type: app
chart: opensky
repo: https://github.com/mutability/dump1090
web: https://opensky-network.org
logo: logo.png
---
{{<app>}}

This application will collect parsed air traffic data and send it to OpenSky.

{{<image "opensky_1.jpg">}}

### Prepare cluster

Before installing this app you need to select k8s worker which will have ADS-B USB Receiver connected. In particular you need to disable a few kernel drivers. SSH into the worker and run the following command: 

```bash
sudo rmmod dvb_usb_rtl28xxu rtl2832 rtl2830
```

If you see something like this, you're good.

``` bash
rmmod: ERROR: Module dvb_usb_rtl28xxu is not currently loaded
rmmod: ERROR: Module rtl2832 is not currently loaded
rmmod: ERROR: Module rtl2830 is not currently loaded
```

Otherwise add a blacklist to prevent them from loading after reboot: 

```bash
echo 'blacklist dvb_usb_rtl28xxu blacklist rtl2832 blacklist rtl2830' > /etc/modprobe.d/block.conf
```

### Configuration options

| Section | Param | Default | Description |
|---------|-------|---------|-------------|
|| **nameOverride** || Use this to override name of the chart |
| **general** |
|| **namespace** | `default` | Namespace to install app into |
|| **nodeSelector** || List of selectors to bind deployment to specific node |
| **opensky** |
|| **lat** || Your latitude |
|| **lon** || Your longitude. You can use [WhatsMyGPS](http://www.whatsmygps.com) to retrieve your data |
|| **alt** || Your altitude. You can use [WhatAltitude](https://whataltitude.com) to retrieve your altitude |
|| **serial** || Serial of your receiver. If you're launching this for the first time, check auto-generated number in the logs, put it in your values file and upgrade the app. Alternatively you can check its number in your OpenSky dashboard |
|| **user** || Your OpenSky username |
| **docker** |
|| **image** | `gohomeio/opensky` | Docker image |
|| **tag** | `1.0.0` | Docker image version |
|| **pullPolicy** | `IfNotPresent` | When to pull an image | 
| **resources** | 
|| **cpu.requests** | `200m` | CPU request for the feeder | 
|| **cpu.limits** | `400m` | CPU limit for the feeder | 
|| **memory.requests** | `100Mi` | Memory request for the feeder | 
|| **memory.limits** | `200Mi` | Memory limit for the feeder | 
| **inbound**|
|| **enabled** | `false` | Flag indicating whether ingress should be created |
|| **host** || Ingress host |
|| **ingressAnnotations** | Træfik-specific | Annotations to apply to ingress |

#### Default ingress annotations

```yaml
kubernetes.io/ingress.class: traefik
ingress.kubernetes.io/auth-type: "basic"
ingress.kubernetes.io/auth-secret: "k8s-auth"
traefik.ingress.kubernetes.io/redirect-entry-point: https
traefik.ingress.kubernetes.io/redirect-permanent: true
```

For basic-auth secret you need to generate passwords file first: 

```bash
htpasswd -c ./auth <your_user>
```

And then create a secret

```bash
kubectl create secret generic k8s-auth --from-file=auth -n <namespace>
```