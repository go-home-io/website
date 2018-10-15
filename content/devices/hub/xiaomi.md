---
title: Xiaomi
description: Xiaomi miio hub
date: 2018-08-26T17:09:03-07:00
draft: false
toc: true
type: device
device: hub
provider: xiaomi
logo: xiaomi.jpeg
introducedIn: 0.1
updateType: internalPush
---
{{<device>}}

{{<warning "Xiaomi Hub must be executed on a hostNetwork (static workers ih Helm chart).">}}

Plugin provides control of Xiaomi hub. 

{{<warning "Right now only one gateway is supported within the same sub-network.">}}

It utilizes developers' API and requires certain configuration through the mobile app first:

{{<image "xiaomi_1.jpeg">}}
Open the app, select your hub and click on its options (three dots in the upper right corner)

{{<image "xiaomi_2.jpeg">}}
Tab repeatedly on the empty space under the *Gameplay tutorial* menu option. Three more options will pop up. 

{{<image "xiaomi_3.jpeg">}}
Select **second** new option, enable switch option and press OK to save changes -- this will enable development API. Note your gateway password *09F859F7B23A46BE* in the screenshot.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **ip** | yes | ipv4 || IP address of the gateway |
| **key** | yes | string || Gateway password |
| **units** || string | `metric` | Unit of measure used by the gateway. It's unclear right now whether gateway always uses Metric system or is it possible to change |

### Supported devices

* Gateway LED
* Temperature/humidity sensors
* Motion sensors
* Magnets
* Switches 

### Supported properties

#### Gateway LED

| Property | Type | Description |
|----------|------|-------------|
| `on` | bool | Flag indicating whether device is on |
| `brightness` | percent | Current brightness level | 
| `color` | {r,g,b} | Current color |

#### Temperature/humidity sensor

| Property | Type | Description |
|----------|------|-------------|
| `temperature` | float | Current temperature | 
| `humidity` | float | Current humidity |
| `battery_level` | percent | Current battery level |

#### Motion sensor 

| Property | Type | Description |
|----------|------|-------------|
| `on` | bool | Flag indicating whether motion is detected |
| `battery_level` | percent | Current battery level |

#### Magnet

| Property | Type | Description |
|----------|------|-------------|
| `on` | bool | Flag indicating whether magnet is in the opened state |
| `battery_level` | percent | Current battery level |

#### Switch

> Click states are staying `on` for 5 seconds.

| Property | Type | Description |
|----------|------|-------------|
| `click` | bool | Flag indicating whether single click is detected |
| `double_click` | bool | Flag indicating whether double click is detected |
| `press` | bool | Flag indicating whether long press is detected |
| `battery_level` | percent | Current battery level |


### Supported commands

#### Gateway LED

| Command | Input | Description |
| --------|-------|-------------|
| `on` || Turns the device on |
| `off` || Turns the device off |
| `toggle` || Toggles the device state | 
| `set-brightness` | percent | Sets the device brightness |
| `set-color` | {r,g,b} | For colorful bulbs sets color | 

### Example

```yaml
system: device
provider: hub/xiaomi
name: xiaomi
key: 09F859F7B23A46BE
ip: 192.168.0.27
units: metric
```