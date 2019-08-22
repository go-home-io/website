---
title: Cron trigger
description: Cron-based trigger
date: 2018-10-15T23:16:39-07:00
draft: false
bref: Periodic events based on cron expressions
toc: true
type: system
system: trigger
provider: cron
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

Cron trigger reacts based on
[cron expressions](https://en.wikipedia.org/wiki/Cron#CRON_expression) (e.g. time-based).
You can use [this](https://crontab.guru) handy website to validate your schedule.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **schedule** | yes | string || Cron expression |

### Example

The following trigger will turn on the lights at 11.30 PM.

```yaml
system: trigger
provider: cron
name: cron-tr
schedule: "30 23 * * *"
actions:
  - system: device
    entity: hue.light.c_lr_lamp
    command: "on"
  - system: device
    entity: hue.light.c_lr_lamp
    command: set-brightness
    args: 80

```
