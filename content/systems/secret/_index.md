---
title: Secrets
description: Secrets storage
date: 2018-07-24T00:45:51-07:00
draft: false
bref: Secrets storage allows to read secret variables from various sources
toc: true
type: system
system: secret
provider:
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

Secrets system is one of those systems which have to be configured through
the command line only, since actual configuration parsing starts only after
the Secrets system fished initialization. Flag name is `-s` or `--secret`.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **provider** || string |`fs`| Provider name to use for configs loading |

Other params may vary depends on a selected provider.

> If no options are specified, system defaults to
a [local file storage]({{<relref "/systems/secret/local-fs.md">}}) provider.

### Example

Both following examples will load local filestorage secrets:

```bash
./go-home \
-s provider:fs \
-s location:/data/go-home
```

```bash
./go-home \
--secret=location:/data/go-home
```
