---
title: Hubs
device: hub
introducedIn: 0.1
updateType:
shared: true
---

For any hub you can choose to override children devices' names based on
their IDs. If those overrides are not specified, auto-generated
IDs will be used as names instead.

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| **nameOverrides**  | dict || [Glob]({{<relref "/docs/config/glob.md">}})-based ID mappings |
