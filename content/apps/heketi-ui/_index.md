---
title: Heketi Dashboard
description: Heketi admin UI
date: 2018-09-22T23:57:47-07:00
draft: false
bref: Web based dashboard for the Heketi server
toc: false
sidebar: false
type: app
chart: heketi-ui
repo: https://github.com/orachide/heketi-ui
web:
logo:
---
{{<app>}}

Heketi UI is a dashboard which provides all vital information about your
glusterFS cluster.

{{<image "heketi_1.png">}}

### Configuration options

| Section | Param | Default | Description |
|---------|-------|---------|-------------|
|| **nameOverride** || Use this to override name of the chart |
| **general** |
|| **namespace** | `default` | Namespace to install app into |
|| **heketi** |
|| **server** || Heketi server URL, the same which was used for the Storage Class |
|| **username** | `admin` | Heketi username |
|| **password** | `My Secret` | Heketi password. Those details were provided during the Heketi setup in `/etc/heketi/heketi/heketi.json` file |
| **docker** |
|| **image** | `gohomeio/heketi-ui` | Docker image |
|| **tag** | `1.0.0` | Docker image version |
|| **pullPolicy** | `IfNotPresent` | When to pull an image |
| **resources** |
|| **cpu.requests** | `100m` | CPU request for the dashboard |
|| **cpu.limits** | `200m` | CPU limit for the dashboard |
|| **memory.requests** | `50Mi` | Memory request for the dashboard |
|| **memory.limits** | `100Mi` | Memory limit for the dashboard |
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
