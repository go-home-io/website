---
title: Network
description: Network setup
date: 2018-07-26T14:54:13-07:00
draft: false
weight: 40
bref: Configuring robust networking for the cluster 
toc: false
type: doc
logo: k8s.png
---
To easily manage your application it's better to use combination of [WaveNet](https://github.com/weaveworks/weave) and [MetalLB](https://metallb.universe.tf). First one is network plugin, second provides load balancer implementation for the bear-metal k8s clusters.

To install WaveNet simply run: 
```bash
kubectl apply -f "https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\n')"
```

For MetalLB you need to create ConfigMap first: 

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: metallb-system
  name: config
data:
  config: |
    address-pools:
    - name: default
      protocol: layer2
      addresses:
      - 192.168.0.110-192.168.0.120 
``` 

Where `192.168.1.110-192.168.1.120` is a range of IP addresses you're allowing cluster to use.

Install MetalLB:
```bash
kubectl apply -f https://raw.githubusercontent.com/google/metallb/v0.7.1/manifests/metallb.yaml
```

Modify `/etc/rc.local` and add the following before `exit`: 

```bash
ifconfig wlan0 promisc
```

This will enable promiscuous mode for `wlan0` interface upon boot. 

{{<warning "If you're using different connection, make sure that you put correct interface name.">}}