---
title: Local FS
description: Local file storage configs loader
date: 2018-07-24T00:38:02-07:00
draf: false
bref: Provides data from config files location on local file storage
toc: true
type: system
system: config
provider: fs
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

Default config provider which loads `yaml` files from local file storage. 

Provider iterates over all nested folder and looking for files with `.yaml` extension. If name of a file starts from `_`, it's ignored. 

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **location** ||string| `cur_dir/configs` | Root folder containing config files |

### Example

The following example will load files from `/data/go-home` folder:

```bash
./go-home \
-c provider:fs \
-c location:/data/go-home
```