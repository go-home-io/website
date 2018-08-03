---
title: Applications
description: Third-party apps
date: 2018-08-03T01:39:36-07:00
draf: false
weight: 20
bref: Third-party applications accompanying go-home 
toc: false
type: doc
logo: helm.png
---

`go-home` uses [Helm](https://helm.sh) package manager for deploying accompanying apps into k8s cluster. All apps are published into Helm repository, which is published to [GitHub Pages](https://pages.github.com) and available [here](https://apps.go-home.io).

To start using pre-built apps simply run 

```bash
helm repo add go-home https://apps.go-home.io
```

> Refer to official [documentation](https://docs.helm.sh/using_helm/#installing-helm) for helm installation details.


To install any app, you can override default params by passing custom `value.yaml` file:  

```bash
$ helm install go-home/volantmq --values=my_values.yaml --name=mqtt
NAME:   mqtt
LAST DEPLOYED: Fri Aug  3 13:44:23 2018
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Service
NAME         TYPE       CLUSTER-IP      EXTERNAL-IP  PORT(S)   AGE
mqtt-volantmq  ClusterIP  10.105.227.175  <none>       1883/TCP  3s

==> v1beta1/Deployment
NAME         DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
mqtt-volantmq  1        1        1           0          2s

==> v1/Pod(related)
NAME                          READY  STATUS   RESTARTS  AGE
mqtt-volantmq-5d6fbb585c-h2xtx  0/1    Pending  0         1s

==> v1/ConfigMap
NAME         DATA  AGE
mqtt-volantmq  1     3s


NOTES:
VolantMQ is ready, use the following configuration options:

NOTE: Select only one set of credentials.
Consider using secrets!

system: device
provider: hub/mqtt
login: smartthings
password: pass
clientID: gohome
broker: mqtt-volantmq.default.svc.cluster.local:1883

```

{{<warning "Since apps are updating frequently, you might to run update first:">}}

```bash
helm repo update
```