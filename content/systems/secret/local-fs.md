---
title: Local FS
description: Local file storage secrets provider
date: 2018-07-31T13:55:25-07:00
draft: false
bref: Provides secrets from file stored on local file storage
toc: true
type: system
system:
provider:
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

Default secrets provider which loads secrets from local `yaml` file.

By default provider uses `_secrets.yaml` file in config directory.

File is a simple `key:value` `yaml` file, e.g.:

```yaml
hue-hub-192.168.0.29: long_token_here
```

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **location** || string | `cur_dir/configs/_secrets.yaml` | Secrets file |

### Example

The following example will load secrets from `/data/go-home/_my_secrets.yaml` file:

```bash
./go-home \
-s provider:fs \
-s location:/data/go-home/_my_secrets.yaml
```
