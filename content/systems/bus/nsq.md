---
title: NSQ
description: NSQ service bus implementation
date: 2018-07-19T12:43:15-07:00
draf: false
bref: NSQ is a perfect service bus for in-house usage
toc: true
type: system
system: bus
provider: nsq
logo: nsq.png
app: nsq
introducedIn: 0.1
---
{{<provider>}}

[NSQ](https://nsq.io/) is a light-weight and blazing-fast pub/sub service bus, written in Go and it's perfect for simple in-house installation.

{{<warning "Authentication is not supported as of now.">}} 

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **server** | yes | string || `nsqd` address |

### Example 

```yaml
system: bus
provider: nsq
server: nsqd.default.svc.cluster.local:4150
```