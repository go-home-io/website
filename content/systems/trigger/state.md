---
title: State trigger
description: State triggers overview
date: 2018-07-19T12:43:15-08:00
draft: false
bref: State trigger watches devices state
toc: true
type: system
system: trigger
provider: state
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

State trigger watches devices updates and reacts if actual state matches state defined in the config.  

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **logic** || one of `or`, `and` | `or` | Defines whether trigger should react on any or all state match |
| **delay** || seconds | `0` | Defines whether trigger should react with delay. If delay is specified and after N seconds state not matches, trigger doesn't react |
| **pessimistic** || bool | `false` | If set to `true`, trigger reacts even upon first device load |
| **devices** | yes ||| List of devices to watch |

### Device definition

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **device** | yes | string || [Glob]({{<relref "/docs/config/glob.md">}})-based device ID to watch |
| **property** | yes | string || Property name to watch |
| **state** | either state or mapper ||| Property desired state |
| **mapper** |either state or mapper| string|| Property [mapper]({{<relref "/docs/config/mappers.md">}}), must return bool |

### Example 

The following example demonstrates two triggers reacting on motion sensor and turning on lights at 80% brightness for 60 seconds:

```yaml
system: trigger
provider: state
name: hallway lights on 
logic: and 
devices: 
  - device: mqtt.sensor.hallway
  	property: "on"
  	state: true
  - device: hue.light.group_hallway
  	property: "on"
  	state: false
actions: 
  - system: device
  	entity: hue.light.group_hallway
  	command: "on"
  - system: device 
  	entity: hue.light.group_hallway
  	command: set-brightness
  	args: 80

---

system: trigger
provider: state
name: hallway lights off 
logic: and 
delay: 60 
devices: 
  - device: mqtt.sensor.hallway
  	property: "on"
  	state: false
  - device: hue.light.group_hallway
  	property: "on"
  	state: true
actions: 
  - system: device
  	entity: hue.light.group_hallway
  	command: "off"
```

The following example will turn off lights if no motions was detected after the last camera update: 

```yaml
system: trigger
provider: state
name: hallway lights off
devices:
  - device: hallway_camera.*
    property: distance
    mapper: num(payload) <= 5
actions:
  - system: device
    entity: group.hallway_lights
    command: "off"
```