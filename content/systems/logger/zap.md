---
title: zap
description:
date: 2018-08-04T12:14:25-07:00
draft: false
bref: zap logger provider
toc: false
type: system
system: logger
provider: zap
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

[zap](https://github.com/uber-go/zap) is an extremely fast structured logger by Uber.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **target** | yes | string | `console` | Log target |

#### Supported targets

* `console` -- outputs everything to the standard console. History is unavailable.
* `influxDB` -- outputs everything to the influxDB. History is available

#### influxDB target configuration

Logger will try to create a new database upon startup.

{{<warning "Logger won't change retention policy of the existing database.">}}

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **address** | yes | string || InfluxDB server address |
| **username** | yes | string || Username for InfluxDB connection |
| **password** | yes | string || Password for InfluxDB connection |
| **database** | yes | string || Database to use |
| **retention** || string | `7d` | Retention policy duration for the database. You can check format [here](https://docs.influxdata.com/influxdb/v1.7/query_language/spec/#durations) |
| **batchSize** || int | `10` | Number of records to store in-memory before performing a transaction |
