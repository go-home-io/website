---
title: k8s secret
description: Supplies secrets from k8s secret 
date: 2018-07-31T16:54:51-07:00
draf: false
bref: Allows to integrate with k8s secrets and use them as secret provider for go-home
toc: true
type: system
system: secret
provider: k8s
logo: k8s.png
app:
introducedIn: 0.1
---
{{<provider>}}

k8s provider attempts to load secrets from k8s-cluster secrets. Secret should have `key:value` map. 

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **secret** || string | `default/go-home` | Specifies namespace and secret name to use |

The following example will use `go-home-server` secret in `default` namespace:

```bash
./go-home \
    -s provider:k8s \
    -s secret:go-home-server
```

You can create secrets like this:
```bash
kubectl create secret generic go-home-server --from-literal=test-secret="example data"
```