---
title: Service bus
description: Pub/Sub communication
date: 2018-07-20T12:00:30-07:00
draft: false
bref: Service bus handles all communications between master and workers
toc: false
type: system
system: bus
provider:
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

### Quick overview

`go-home` uses service bus to avoid direct exposing of the workers to the internet.
For a simple usage scenarios [NSQ]({{<relref "/systems/bus/nsq.md">}})
is a great choice.
