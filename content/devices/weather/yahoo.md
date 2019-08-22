---
title: Yahoo
description: Yahoo weather
date: 2018-08-07T00:56:19-07:00
draft: false
toc: true
type: device
device: weather
provider: yahoo
logo: yahoo.png
introducedIn: 0.1
updateType: externalPull
---
{{<device>}}

This plugin allows to query a current weather from [Yahoo](https://www.yahoo.com/news/weather).

Before using this plugin you need to register a new Yahoo app and request weather
API to be whitelisted.

Since it's not a web app, you don't need to configure redirect URL.
After app registration you should have something similar to this:

{{<image "yahoo-app.png">}}

For detailed instructions please refer to the official [documentation](https://developer.yahoo.com/weather/).

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **location** | yes | string || Location in format `city, state, country`. Check [YQL](https://developer.yahoo.com/weather/) for more details |
| **appId** | yes | string || Yahoo Application ID |
| **clientId** | yes | string || Yahoo Application's client ID|
| **clientSecret** | yes | string || Yahoo Application's client secret |
| **pollingInterval** || int | `10` | Interval in minutes between the updates |
| **properties** || [string] || List of properties to query |

### Supported properties

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
| `description` | string | Text representation of the current condition |

### Supported commands

None

### Example

```yaml
system: device
provider: weather/yahoo
name: oakland
location: Oakland, CA, US
appId: your-app-id
clientId: your-client-id
clientSecret: your-client-secret
properties:
  - temperature
  - description
```
