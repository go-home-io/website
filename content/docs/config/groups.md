---
title: Groups
description: Groping devices
date: 2018-08-05T22:34:20-07:00
draft: false
weight: 50
bref: Combining multiple devices into one group
toc: false
type: doc
logo:
system: device
provider: group
---
{{<provider>}}

Groups are used for combining multiple devices into logical group.
Besides that, group will pick properties and commands which are common for
all devices belonging to the group.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **name** | yes | string || Group name |
| **devices** | yes | [string]|| List of [glob]({{<relref "/docs/config/glob.md">}})-based device IDs |

### Examples

```yaml
system: device
provider: group
name: cabinet lights
devices:
  - cab_led.*
  - samsung.switch.cabinet_lamp
  - hue.light.w_cb_lamp
```
