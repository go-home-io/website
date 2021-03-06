---
title: k8s config map
description: Loads data from k8s config map
date: 2018-07-24T00:58:10-07:00
draft: false
bref: Allows to integrate with k8s config maps and use them as a storage
toc: true
type: system
system: config
provider: k8s
logo: k8s.png
app:
introducedIn: 0.1
---
{{<provider>}}

k8s provider attempts to load configuration from config map.
Config map can have any amount of records. Naming convention follows the same as
a [local FS]({{<relref "local-fs">}}) provider.

{{<warning "Binary data is not supported.">}}

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **config-map** || string | `default/go-home` | Specifies namespace and config map name to use |

### Example

The following example will load data from `go-home-server` config map in
`default` namespace:

```bash
./go-home \
    -c provider:k8s \
    -c config-map:default/go-home-server
```

The following examples show how you can organize your config map:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: go-home-server
data:
  config.yaml: |-
    system: go-home
    type: master
    port: 8000
    delayedStart: 0

  hubs.yaml: |-
    system: device
    provider: hub/hue
    name: hue
    workerSelectors:
      name: worker-1
```

Alternatively you can upload all files from a folder using the following command:

```bash
kubectl create configmap go-home-server --from-file=/path/to/your/configs/
```
