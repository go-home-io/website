---
title: Devices
description: Misc info about devices
date: 2018-08-07T11:36:49-07:00
draft: false
weight: 90
bref: Details on integrating with various devices
toc: false
sidebar: true
type: doc
logo:
---
`go-home` defines six different types of interaction with devices:

* <i class="upd_internalPull"></i> -- `internal pull`: workers are interacting
with devices without internet access by pulling data
* <i class="upd_externalPull"></i> -- `external pull`: workers are interacting
with devices through the internet by pulling data
* <i class="upd_pull"></i> -- `pull`: interaction depends on a source type --
either internal or external
* <i class="upd_internalPush"></i> -- `internal push`: workers are only pushing
data to devices without internet access
* <i class="upd_externalPush"></i> -- `external push`: workers are only pushing
data to devices through the internet
* <i class="upd_pubSub"></i> -- `pub/sub`: workers are communicating with devices
through pub/sub, e.g. MQTT. Internet access might be required depends on your setup
