---
title: Providers
description: go-home plugins
date: 2018-08-03T01:39:30-07:00
draft: false
weight: 20
bref: go-home plugins
toc: false
type: doc
logo: jfrog.jpg
---

<!-- markdownlint-disable line-length -->
**ARM**: [![ARM](https://api.bintray.com/packages/go-home-io/arm/providers/images/download.svg)](https://bintray.com/go-home-io/arm/providers/_latestVersion)
**AMD**: [![AMD](https://api.bintray.com/packages/go-home-io/amd64/providers/images/download.svg)](https://bintray.com/go-home-io/amd64/providers/_latestVersion)
<!-- markdownlint-enable line-length -->

Providers in `go-home's` terminology are simple golang plugins,
implementing single supported system or device.

All providers are pre-built for two architectures: `arm32v6` and `amd64`,
allowing to run `go-home` on RPi and regular machines out of the box.

Thanks to the free OpenSource license from [Bintray](https://bintray.com)
you don't need to download providers manually. `go-home` will determine required
libraries and download them upon start.

> For k8s setup, to reduce transferred data, it's suggested to use single
`PersistentVolume` for all `go-home` servers.
If you've chosen to do so, it's better to run
[Bintray Proxy]({{<relref "/apps/bintray-proxy">}}) app.
