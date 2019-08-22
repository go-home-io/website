---
title: API
description: Extending default APIs 
date: 2018-07-31T19:04:58-07:00
draft: false
bref: Extended APIs allow to add additional functionality to go-home servers
toc: false
type: system
system: api
provider:
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

Extended API is an additional mechanism which could help with multiple things:

* Add new HTTP handlers to master server
* Add additional channel between master and selected worker with custom logic

In case provider requires `workerSelectors`
[configuration]({{<relref "/docs/config/worker-selectors.md">}}),
it means that this API will be launched on worker as well.

> Extended API system is not designed to launch on all workers,
you have to specify exact worker.
