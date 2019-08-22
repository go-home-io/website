---
title: HUE emulator
description: Emulating HUE hub
date: 2018-07-31T20:26:40-07:00
draft: false
bref: Allows to emulate Philips HUE hub and expose devices though it
toc: true
type: system
system: api
provider: hue
logo: hue.png
app:
introducedIn: 0.1
---
{{<provider>}}

<!-- markdownlint-disable line-length -->
{{<warning "Hue emulator must be executed on a hostNetwork (static workers ih Helm chart).">}}
<!-- markdownlint-enable line-length -->

By emulating HUE hub, you can expose `go-home` devices to Alexa/Google Home, etc.

API has to be running on a worker, which is located in the same sub-network,
where target consumer is located.

<!-- markdownlint-disable line-length -->
{{<warning "Emulator uses FNV-1a hash of device ID to advertise it. Changes in IP require re-discovery.">}}
<!-- markdownlint-enable line-length -->

{{<image "hue-devices.png">}}

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **advAddress** | yes | ipv4:port || IP and port where hub should be available. You should use static IP:port otherwise re-discovery is required |
| **nameOverrides** || dict || List of `key:value` pairs: internal_id:external_name |
| **workerSelectors** | yes | dict || Worker [selectors]({{<relref "/docs/config/worker-selectors.md">}}) |
| **devices** || [string] || [Glob]({{<relref "/docs/config/glob.md">}})-based device filters which should be exposed |
| **types** || [string] | all supported | List of devices types to expose |

### Supported device types

| Device | Command `on` | Command `off` | Command `set-brightness` | Property `on` | Property `brightness`|
|--------|--------------|---------------|--------------------------|--------------|-------------------------|
| `light` | `on` | `off` | `set-brightness` | `on` | `brightness` |
| `switch` | `on` | `off` | | `on` | |
| `vacuum` | `on` | `off` | `set-fan-speed` | status == `cleaning` | `fan_speed` |
| `group` ||| depends on group |

### Example

```yaml
system: api
provider: hue
name: home-hue
advAddress: 192.168.0.127:5000
nameOverrides:
  cab_led.light.192_168_0_28: Cabinet Illumination
workerSelectors:
  name: worker-1
```
