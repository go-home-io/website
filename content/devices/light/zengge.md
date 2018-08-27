---
title: Zengge
description: Smart LED lighting 
date: 2018-08-04T12:13:17-07:00
draft: false
toc: true
type: device
device: light
provider: zengge
logo: zengge.png
introducedIn: 0.1
updateType: internalPull
---
{{<device>}}

Zengge, a.k.a. Flux, a.k.a. Magic Home are cheap WiFi-enabled devices or dongles produced by various Chinese manufacturers.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **ip** | yes | ipv4 || IP address of the device | 
| **pollingInterval** || int | `5` | Interval in seconds to wait between pulling updates from the device | 

### Supported properties

| Property | Type | Description |
|----------|------|-------------|
| `on` | bool | Flag indicating whether device is on |
| `color` | {r,g,b} | Current color |

### Supported commands

| Command | Input | Description |
| --------|-------|-------------|
| `on` || Turns the device on |
| `off` || Turns the device off |
| `toggle` || Toggles the device state | 
| `set-color` | {r,g,b} | For colorful bulbs sets color | 

### Example

```yaml
system: device
provider: light/zengge
name: cab-led
ip: 192.168.0.28
pollingInterval: 20
```