---
title: Trigger
description: System-wide events
date: 2018-07-19T12:43:15-07:00
draf: false
bref: Triggers system is responsible for reacting on various events occured in the go-home system
toc: true
type: system
system: trigger
provider:
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

Trigger system is responsible for reacting on state-changes events. As an outpur, triggers can change state of any device or start other actions.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **name** | yes | string || Name of the trigger. Used as prefix for entity ID |
| **activeHrs** | | string in ["Kitchen"](https://golang.org/pkg/time/#pkg-constants) format || If specified, this time range is used for limiting trigger actions. For example `12:00PM-03:00PM` makes trigger to react for 3 hrs after noon only|
| **actions** | at least one  ||| List of trigger actions |

### Trigger action

Describes which actions should be taken if trigger is in `triggered` state. Actions will be executed one by one. 

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **system** | yes | string || Describes which system this action belongs to |
| **entity** | yes | string || [Glob]({{<relref "/docs/config/glob.md">}})-based entity ID which should be called |
| **command** | yes | string || Command which should be called |
| **args** |||| List of arguments to pass to `command` |

#### Action systems

* `device` -- invokes device command.