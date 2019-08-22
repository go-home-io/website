---
title: Storage
description: State history storage
date: 2018-08-12T23:44:04-07:00
draft: false
bref: Allows to select a backend for storing history of devices' state changes
toc: false
type: system
system: storage
provider:
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

Storage system is a backend for saving devices state data.
If storage is not configured no data would be presented on dashboard.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **storeHeartbeat** || bool | `false` | Flag indicating whether pings from devices should be stored |
| **exclude** |||| List of [glob]({{<relref "/docs/config/glob.md">}})-based entities to exclude from storing |
| **include** |||| List of [glob]({{<relref "/docs/config/glob.md">}})-based entities to include into storing even if this device type is excluded by default |

### List of excluded device types

* `camera` - Saving raw pictures might increase your DB size dramatically.
