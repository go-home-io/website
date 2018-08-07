---
title: pprof
description: Proriler
date: 2018-07-31T19:39:58-07:00
draf: false
bref: Master server pprof data 
toc: false
type: system
system: api
provider: pprof
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

Exposing [pprof](https://golang.org/pkg/net/http/pprof/) metrics for the master server. They are available on `/debug/pprof` URL. 

{{<image "pprof.png">}}