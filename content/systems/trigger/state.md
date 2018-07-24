---
title: State trigger
description: State triggers overview
date: 2018-07-19T12:43:15-08:00
draf: false
bref: State trigger watches devices state
toc: true
type: system
---

### Quick overview

State trigger watches devices updates and reacts if actual state matches state defined in the config.  

### Configuration options

| Param | Validation | Default | Description |
|-------|-----------|----------|-------------|
| **logic** | one of `or`, `and` | `or` | Defines whether trigger should react on any or all state match. |
| **delay** | seconds | `0` | Defines whether trigger should react with delay. If delay is specified and after N seconds state not matches, trigger won't react. |
| **pessimistic** | bool | `false` | If set to `true`, trigger will react even upon first device load. |
| **devices** | required | | List of devices to watch. |

### Device definition

| Param | Validation | Default | Description |
|-------|-----------|----------|-------------|
| **device** | required || Glob-based device ID to watch. |
| **property** | required || Property name to watch. |
| **state** | required || Property desired state. |

### Example 

The following examples shows two triggers reacting on motion sensor and turning on lights at 80% brightness for 60 seconds. 

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