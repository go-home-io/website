---
title: Worker selectors
description: Binding devices to workers
date: 2018-07-31T19:14:18-07:00
draf: false
weight: 30
bref: Allows to bind devices to specific workers
toc: false
type: doc
logo:
---
Every device and some other systems could be binded for processing to specific worker. This might be useful when you have `go-home` running in multiple locations and using selectors, you could distribute devices across these locations.

By default you can use worker name, for additional labels you can use worker [properties]({{<relref "/systems/go-home/worker.md">}}).

Device binding is looking for `workerSelectors` configuration. It expects to get list of [glob]({{<relref "/docs/config/glob.md">}})-based `key:value` pairs. 

{{<warning "Only values could be described with wildcards">}}

The following logic is used for selecting device: 

* Master load all devices configurations
* Master receives `discovery` message from workers
* Master first assigns all devices with `workerSelectors` configuration 
* For the rest of devices, master tries to evenly distribute them across workers
* If worker has more devices that specified in `maxDevices` configuration, master is not picking this worker

### Examples

Given that you have two workers: 

```yaml
system: go-home
provider: worker
name: worker-1
properties:
  location: home
---

system: go-home
provider: worker
name: worker-2
properties:
  location: work
``` 

The following device will be binded to `worker-1`: 

```yaml
system: device
provider: hub/hue
name: hue
workerSelectors:
  location: "?om*"
```

And this one will be randomly (depending on number of devices) assigned to one of the workers: 

```yaml
system: device
provider: hub/hue
name: hue
workerSelectors:
  name: worker*
```