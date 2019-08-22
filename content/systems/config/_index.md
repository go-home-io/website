---
title: Config
description: Configs storage reader
date: 2018-07-23T20:05:53-07:00
draft: false
bref: Configs storage allows to read configuration from various sources
toc: true
type: system
system: config
provider:
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

Config system is one of those systems which have to be configured through
the command line only, since actual configuration parsing starts only after
Config system fished initialization. Flag name is `-c` or `--config`.

> Some other systems (e.g. [Secret]({{<relref "/systems/secret">}})) might use
default configs location to store their data. None of them will interfere
with your configuration.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **provider** || string |`fs`| Provider name to use for configs loading |

Other params may vary depends on a selected provider.

> If no options are specified, system defaults to
local file storage]({{<relref "/systems/config/local-fs.md">}}) provider.

### Example

Both following examples will load local filestorage configs:

```bash
./go-home \
-c provider:fs \
-c location:/data/go-home
```

```bash
./go-home \
--config=location:/data/go-home
```
