---
title: SmartThings
description: MQTT broker bridge
date: 2018-07-31T11:56:00-07:00
draft: false
bref: System to share and control SmartThings device states over MQTT
toc: false
sidebar: false
type: app
chart: smartthings 
repo: https://github.com/stjohnjohnson/smartthings-mqtt-bridge
web:
logo: logo.png
---
{{<app>}}

SmartThings bridge allows you to control Samsung [SmartThings](https://www.smartthings.com) devices through the MQTT broker. Consider using [VolantMQ]({{<relref "/apps/volantmq">}}) as a broker. 

{{<warning "Bridge requires static MAC address.">}}

Assuming that you're using MetalLB for the k8s load balancing, make sure that you're deploying Bridge to the same node. 

Get node names running: 
```bash
kubectl get nodes
```

Add label to the selected node, e.g.: 
```bash
kubectl label nodes k8s-agent-3 static=true
```

And use node's MAC address in your `MQTT Bridge` device.

### Configuration options

| Section | Param | Default | Description |
|---------|-------|---------|-------------|
|| **nameOverride** || Use this to override name of the chart |
| **general** |
|| **namespace** | `default` | Namespace to install app into |
|| **nodeSelector** `static: true` | List of node labels to deploy to |
| **docker** |
|| **image** | `gohomeio/smartthings` | Image name | 
|| **tag** | `1.0.0` | Image tag | 
|| **pullPolicy** | `IfNotPresent` | When to pull an image |
| **resources** | 
|| **cpu.requests** | `100m` | CPU request for the bridge | 
|| **cpu.limits** | `100m` | CPU limit for the bridge | 
|| **memory.requests** | `40Mi` | Memory request for the bridge | 
|| **memory.limits** | `60Mi` | Memory limit for the bridge | 
| **inbound** |
|| **port** | `8081` | Bridge port, exposed through service | 
|| **type** | `LoadBalancer` | Type of exposed service. Defaults to load balancer |
|| **loadBalancerIP** || Static IP to use for the service. Might be useful since you need to lock this address in the Smart Things IDE |
| **app** |
|| **mqtt.host** | `volantmq.default.svc.cluster.local:1883` | MQTT broker host | 
|| **mqtt.username** | `gohome` | MQTT broker username |
|| **mqtt.password** | `password` | MQTT broker password |
|| **preface** | `smartthings` | MQTT topics preface |
|| **suffix.state.read** || MQTT state topic suffix |
|| **suffix.state.write** || MQTT set state topic suffix |
|| **suffix.cmd** || MQTT command topic suffix |
