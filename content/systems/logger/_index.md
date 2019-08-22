---
title: Logger
description: Log system
date: 2018-08-04T12:14:01-07:00
draft: false
bref: System-wide logger implementation
toc: false
type: system
system: logger
provider:
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

`go-home` provides system-wide logger implementation and every plugin receives
it during the initialization.

Besides actual log message, additional `key: value` pairs could be specified
and they will be available in logger output.

If logger is not configured, default `console` logger is used, it doesn't have
any configuration options and has `debug` level on.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **level** || string | `info` | Log level |

#### Supported log levels

* `debug`
* `info`
* `warn`, `warning`
* `error`
