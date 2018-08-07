---
title: Devices
description: Misc info about devices
date: 2018-08-07T11:36:49-07:00
draf: false
weight: 90
bref: Details on integrating with various devices
toc: false
sidebar: false
type: doc
logo:
---
`go-home` defines five different types of interaction with devices: 

* <i class="internalPull"></i> -- `internal pull`: workers are interacting with devices without internet access by pulling data
* <i class="externalPull"></i> -- `external pull`: workers are interacting with devices through the internet by pulling data
* <i class="internalPush"></i> -- `internal push`: workers are only pushing data to devices without internet access
* <i class="externalPush"></i> -- `internal push`: workers are only pushing data to devices through the internet
* <i class="pubSub"></i> -- `pub/sub`: workers are communicating with devices through pub/sub, e.g. MQTT. Internet access might be required depends on your setup