---
title: Philips HUE
description: Philips HUE hub
date: 2018-08-03T18:10:54-07:00
draft: false
toc: true
type: device
device: hub
provider: hue
logo: hue.png
introducedIn: 0.1
updateType: internalPull
---
{{<device>}}

Plugin provides control of Philips HUE Hubs.

This provider supports secret storage and will automatically persist token in
format `hue-hub-<ip address>`. E.g. `hue-hub-192.168.0.29: token`.
If your hub is not configured to use static IP,
make sure you've added `token` into config.

For the loaded groups, associated scenes will be loaded as well.

> If token is not provided, make sure you've pressed the button on the top of
the hub prior to launching `go-home`. If button is not pressed,
registration won't work.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **ip** || ipv4 || IP address of the bridge. If it's not provided plugin tries to discover it |
| **token** || string || Access token for the device. If it's not provided, plugin tries to register a new user `go-home` |
| **loadResources** | yes | string | `lights` | Types of resource to load from hub |
| **pollingInterval** || int | `20` | Interval in seconds to wait between pulling updates from the hub. First generation hubs start to throw errors if this values is too low, therefore minimal value is `2` seconds |

#### Supported resources

* `*` -- load all supported
* `lights` -- physical lights
* `groups` -- logical groups

### Supported properties

| Property | Type | Description |
|----------|------|-------------|
| `on` | bool | Flag indicating whether device is on |
| `brightness` | percent | Current brightness level |
| `color` | {r,g,b} | Current color |
| `transition_time` | float | For certain bulbs shows transition time to next state |
| `scenes` | [string] | For groups only shows list of predefined scenes |

### Supported commands

| Command | Input | Description |
| --------|-------|-------------|
| `on` || Turns the device on |
| `off` || Turns the device off |
| `toggle` || Toggles the device state |
| `set-brightness` | percent | Sets the device brightness |
| `set-color` | {r,g,b} | For colorful bulbs sets color |
| `set-transition-time` | float | For certain bulbs sets transition time |
| `set-scene` | string | For groups only, turns on one of the predefined scenes |

### Example

```yaml
system: device
provider: hub/hue
name: hue
loadResources:
  - "*"
pollingInterval: 5
```
