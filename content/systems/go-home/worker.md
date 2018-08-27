---
title: Worker
description: Worker server configuration
date: 2018-07-31T17:33:35-07:00
draft: false
bref: Possible configuration of the go-home worker server
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
| **name** | yes | string || Worker name | 
| **properties** || dict || List of `key:value` pairs to [label]({{<relref "/docs/config/worker-selectors.md">}}) this worker |
| **maxDevices** || int | `99` | Maximum amount of devices this worker can handle | 

### Example

```yaml
system: go-home
provider: worker
name: worker-1
maxDevices: 20
properties:
  location: home
  type: regular
```