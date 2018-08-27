---
title: Templating
description: Templating in config files
date: 2018-07-23T18:44:59-07:00
draft: false
weight: 20
bref: Templating config files to avoid disclosing secrets
toc: true
type: doc
logo:
---

`go-home` uses golang [templates](https://golang.org/pkg/text/template/) to pre-process config files. 

Even though full-blown templating is not required, it's still possible. 

In addition, `go-home` provides a few pre-build functions. 

### Environment variables

`env` allows to get environment variable.

```yaml
system: bus
provider: nsq
lookup: {{ env "LOOKUPD_HOST" }}
server: {{ env "NSQD_HOST" }}
```

### Secret variables

`sec` allows to get variables from a configured secrets [storage]({{<relref "/systems/secret">}}).

```yaml
system: device
provider: hub/hue
name: hue
token: {{ sec "hue-hub-token" }} 
```