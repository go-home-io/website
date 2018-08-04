---
title: MQTT
description: Generic MQTT hub
date: 2018-08-04T12:12:28-07:00
draf: false
toc: true
type: device
device: hub
provider: mqtt
logo: mqtt.png
---
{{<device>}}

MQTT is a very popular messaging protocol for IoT devices. `go-home` uses [Paho](https://github.com/eclipse/paho.mqtt.golang) client therefore supports all major MQTT versions.  

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **broker** | yes | string || MQTT broker address **without** `mqtt://` prefix | 
| **clientID** || string | `gohome` | Clint ID to use. If you have configured acl's in you broker, make sure you're using correct `clientID` |
| **login** || string || Login to use for broker connection |
| **password** || string || Password to use for broker connection |
| **topicsPrefix** || string || Common prefix to use for every topic |
| **devices** | yes | [device] || List of devices to instantiate |

#### Device

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **type** | yes | string || Device type |
| **name** | yes | string || Device name | 
| **qos** || int | `2` | [Quality of service](https://www.eclipse.org/paho/files/mqttdoc/MQTTClient/html/qos.html) |
| **retained** || bool | `false` | Flag indicating whether commands messages for this device should be posted as retained | 
| **pessimistic** || bool | `false` | Flag indicating whether device should use pessimistic mode. In this mode, after using any command, device is not waiting for the update message from the broker and sets it's internal state automatically to whatever was received from a command | 
| **properties** || [property]|| List of mapped properties |
| **commands** || [command]|| List of mapped commands | 

#### Property 

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **topic** | yes | string || Topic name | 
| **property** | yes | string || Property name |
| **mapper** | yes | string || Property read [mapper]({{<relref "/docs/config/mappers.md">}}) |

#### Command

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **topic** | yes | string || Topic name | 
| **command** | yes | string || Command name |
| **mapper** | yes | string || Command write [mapper]({{<relref "/docs/config/mappers.md">}}) |

### Supported devices

* `sensor` 
* `switch`

### Example 

The following example shows how to integrate with a SmartThings bridge: 

```yaml
system: device
provider: hub/mqtt
name: samsung
login: gohome
password: password
clientID: gohome
broker: mq-volantmq.default.svc.cluster.local:1883
topicsPrefix: smartthings/
devices:
  - type: switch
    name: cabinet lamp
    qos: 2
    properties:
      - property: "on"
        topic: CabinetLamp/switch/state
        mapper: payload == 'on'
    commands:
      - command: "on"
        topic: CabinetLamp/switch/cmd
        mapper: str('on')
      - command: "off"
        topic: CabinetLamp/switch/cmd
        mapper: str('off')
  - type: sensor
    qos: 1
    name: cabinet lamp
    properties:
      - property: power
        topic: CabinetLamp/power/state
        mapper: num(payload)
  - type: sensor
    qos: 1
    name: restroom
    properties:
      - property: "on"
        topic: MotionRestroom/motion/state
        mapper: payload == 'active'
      - property: temperature
        topic: MotionRestroom/temperature/state
        mapper: num(payload)
      - property: battery_level
        topic: MotionRestroom/battery/state
        mapper: num(payload)
```