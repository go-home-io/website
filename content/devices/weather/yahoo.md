---
title: Yahoo
description: Yahoo weather
date: 2018-08-07T00:56:19-07:00
draf: false
toc: false
type: device
device: weather
provider: yahoo
logo: yahoo.png
introducedIn: 0.1
updateType: externalPull
---
{{<device>}}

Quick overview

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **location** | yes | string || Location in format `city, state, country`. Check [YQL](https://developer.yahoo.com/weather/) for more details |  
| **pollingInterval** || int | `10` | Interval in minutes between the updates |
| **properties** || [string] || List of properties to query |

#### Supported properties

| Property | Type | Description |
|----------|------|-------------|
| `temperature` | float | Current temperature |
| `humidity` | float | Current humidity |
| `pressure` | float | Current atmospheric pressure |
| `visibility` | float | Current visibility |
| `wind_direction` | float | Current wind direction |
| `wind_speed` | float | Current wind speed |
| `sunrise` | string | Time of sunrise |
| `sunset` | string | Time of sunset |

### Example

```yaml
system: device
provider: weather/yahoo
name: el cerrito
location: el cerrito, ca, us
properties:
  - temperature
```