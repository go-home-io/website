---
title: Zengge
description: Smart LED lighting 
date: 2018-08-04T12:13:17-07:00
draf: false
toc: false
type: device
device: light
provider: zengge
logo: zengge.png
---
{{<device>}}

Zengge, a.k.a. Flux, a.k.a. Magic Home are cheap WiFi-enabled devices or dongles produced by various Chinese manufacturers.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **ip** | yes | ipv4 || IP address of the device | 
| **pollingInterval** || int | `5` | Interval in seconds to wait between pulling updates from the device | 

### Example

```yaml
system: device
provider: light/zengge
name: cab-led
ip: 192.168.0.28
pollingInterval: 20
```