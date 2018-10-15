---
title: Sensors
description: Misc info about sensors
date: 2018-10-06T17:12:42-07:00
draft: false
weight: 10
bref: Details of supported sensor types
toc: false
type: doc
logo:
---

`go-home` defines six different types of sensors: 

* <i class="sen_generic"></i> -- `generic`: unknown sensor type, usually if you didn't specify it when it's required
* <i class="sen_motion"></i> -- `motion`: motion detection
* <i class="sen_temperature"></i> -- `temperature`: various environmental data, e.g. temperature, humidity, atmospheric pressure, etc. 
* <i class="sen_button"></i> -- `button`: electronic switches with multiple positions
* <i class="sen_lock"></i> -- `lock`: lock-like sensors
* <i class="sen_presence"></i> -- `presence`: presence detection

Depends on a sensor type, dashboard will use different sets of properties for the device. Sometimes you can specify sensor type (e.g. in mqtt hub), in other cases device's provider is responsible for propagating this info.