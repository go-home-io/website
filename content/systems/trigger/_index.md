---
title: Trigger
description: System-wide events
date: 2018-07-19T12:43:15-07:00
draf: false
bref: Triggers system is responsible for reacting on various events occured in the go-home system
toc: true
type: system
---


### Quick overview

Trigger system is responsible for reacting on state-changes events. As an outpur, triggers can change state of any device or start other actions.

### Configuration options

| Param | Validation | Default | Description |
|-------|-----------|----------|-------------|
| **name** | required || Name of the trigger. Will be used as prefix for entity ID. |
| **activeHrs** ||| If specified, this time range will be used for limiting trigger actions. Format is ["Kitchen"](https://golang.org/pkg/time/#pkg-constants). For example `12:00PM-03:00PM` will make trigger to react for 3 hrs after noon only.|
| **actions** | at least one || List of trigger actions.|

### Trigger action

Describes which actions should be taken if trigger is in `triggered` state. Actions will be executed one by one. 

| Param | Validation | Default | Description |
|-------|-----------|----------|-------------|
| **system** | required || Describes which system this action belongs to. |
| **entity** | required || [Glob]({{<relref "/docs/config/glob.md">}})-based entity ID which should be called. |
| **command** | required || Comamnd which should be called. |
| **args** ||| List of arguments to pass to `command`.|

#### Action systems

- `device` -- invokes device command