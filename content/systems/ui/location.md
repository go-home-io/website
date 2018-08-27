---
title: Location
description: Location grouping
date: 2018-08-12T23:20:43-07:00
draft: false
bref: Grouping entities into separate views
toc: false
type: system
system: ui
provider: location
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

Idea of locations is quite similar to [groups]({{<relref "/docs/config/groups.md">}}). The main difference is that locations are used for actually organizing different views in dashboard. 

You can't use [roles]({{<relref "/systems/security/_index.md">}}) to prevent access to certain location, but if user doesn't have access to any of the devices within a location, this location will be hidden. 

All devices which are not manually attached to any of a locations will be assigned to `Default` location. You can use `name: Default` if you want to manually assign devices to this location.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **name** | yes | string || Location name |
| **icon** || string || [Material-ui](https://material.io/tools/icons) icon to use for a location |
| **devices** | yes | [string]|| List of [glob]({{<relref "/docs/config/glob.md">}})-based device IDs |

### Example 

```yaml
system: ui
provider: location
name: cabinet
devices:
  - group.cabinet*

```