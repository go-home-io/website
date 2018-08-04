---
title: zap
description:
date: 2018-08-04T12:14:25-07:00
draf: false
bref: zap logger provider
toc: false
type: system
system: logger
provider: zap
logo:
app:
---
{{<provider>}}

[zap](https://github.com/uber-go/zap) is an extremely fast structured logger by Uber.  

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **targets** | yes | [target] || List of all targets |

#### Target 

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **regular** | yes | [string]|| List of targets for regular messages | 
| **error** | yes | [string]|| List of targets for error messages |

#### Supported targets
* `stdout`
* `stderr`

