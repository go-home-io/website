---
title: Security
description: Users, roles, etc.
date: 2018-07-23T19:37:50-07:00
draf: false
bref: Security system allows to restrict access to certain resources forsome users
toc: true
type: system
---

Security system leverages simple [RBAC](https://en.wikipedia.org/wiki/Role-based_access_control) model to defines who can do what.

First thing to do is to define a new Role. By defaul roles list is empty, meaning everything is restricted for everyone. 

### Roles 

Roles are defining set of rules and users. Be aware, go-home is not validating mutual exclusion and works by first match. Meaning, if you have two rules:

* First -- grants access to resouce A
* Second -- restricts access to resource A

Actual access will be defined by first rule, un-marshalled from config.

Role is authorization part. Authentication is users srorage. 

> By default [Basic Authentication]({{<relref "basic-auth.md">}}) storage is used. 

### Configuration options

| Param | Validation | Default | Description |
|-------|-----------|----------|-------------|
| **rules** | required || List of rules for this role|
| **users** | required || List of [glob]({{<relref "/docs/config/glob.md">}})-based user names who have this role|

### Rules configuration
| Param | Validation | Default | Description |
|-------|-----------|----------|-------------|
| **system** | required || System which is described by this rule | 
| **resources** | required || List of [glob]({{<relref "/docs/config/glob.md">}})-based entities affected by this rule |
| **verbs** | required || List of verbs (operations) affected by this rule|

#### Rule verbs

* `*` -- defines every possible operation
* `get` -- defines read access to the entity
* `command` -- defines entity's command invocation 
* `history` -- defines status history read access

#### Rule systems

* `device` -- defines devices access

### Example

The following role defines `root` access to every device in the system. Any of `user-1` and `user-2` will match this role. 

```yaml
system: security
provider: role
name: root
rules:
  - system: device
    resources:
      - "*"
    verbs:
      - get
      - command
      - history
users:
  - user*

```