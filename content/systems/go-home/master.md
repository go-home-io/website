---
title: Master
description: Master server configuration
date: 2018-07-31T17:09:36-07:00
draf: false
bref: Possible configuration of the go-home master server
toc: false
type: system
system: go-home
provider: master
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **port** || port | `8080` | Port where `go-home` master is exposed | 
| **delayedStart** || int | `0` | Delay in seconds which allows master to wait before all workers will come online. This helps to prevent unnecessary devices-reloads upon system start |
| **units** || string | `imperial` | Metric or imperial system to use for the system |

### Example

```yaml
system: go-home
provider: master
port: 8000
```