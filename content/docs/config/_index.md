---
title: Config techniques 
description: Advanced configuration options
date: 2018-07-23T15:26:42-07:00
draf: false
weight: 20
bref: Make the best of the system by using fluent configuration options
toc: true
type: doc
---

go-home uses `yaml` for storing configuration. Because of the asbstraction level, it's possible to define almost anything in `yaml`.

To avoid confusion, all systems provides similar approach (sometimes similar config flags). 

### What single config is

> Refer to [Config]({{<relref "/systems/config">}}) system to go through providers' specific details. 

By default any file which has `.yaml` extension and not prefixed with `_` symbol counted as valid file. 

For example 

```bash
-rw-r--r--  1     90 Jul 13 17:21 _secrets.yaml <- not a config
-rw-r--r--  1     67 Jul 14 10:57 _users		<- not a config 
-rw-r--r--  1   2283 Jul 23 02:31 config.yaml
-rw-r--r--  1   1255 Jul 18 11:48 hubs.yaml
-rwxr-xr-x  1    662 Jul 12 19:49 k8sproxy.sh	<- not a config
-rw-r--r--  1     89 Jul 19 23:00 lights.yaml
```


Any file can have multiple `yaml`-entries separated by `---`.

```yaml
system: go-home
provider: master
port: 8000
delayedStart: 0

---

system: go-home
provider: worker
name: worker-1
properties:
  location: home
  type: regular
```

### System, provider and name

Almost every config entry should have those three fields

| Param | Validation | Default | Description |
|-------|-----------|----------|-------------|
| **system** | required || Defines which [system]({{<relref "/systems">}}) this entry belongs to. |
| **provider** | required || Defines which system implamentation should be used. In most cases refers to plugin name.|
| **name** | required* || Name for the loaded plugin. Used for prefixes while generating entity ID. Only [go-home]({{<relref "/systems/go-home">}}) system's master doesn't require name. |


### How configs are processed

go-home loads selected provider and waits for blocks of content. Each block processes using following logic

* for each entry
* validates required fields
* if this component is required at system start, makes an attempt to load it
* otherwise stores for later

If component is required to start go-home and it has invalid configuration, go-home will panic. 

### Limitations

The following limitations exist: 

* Operation and property names `on` and `off` must be escaped (e.g. `"on"`) otherwise they're treated as booleans.
* Wildcard `*` in arrays has to be escaped (e.g. `"*"`).