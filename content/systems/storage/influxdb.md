---
title: InfluxDB
description: InfluxDB storage
date: 2018-08-12T23:44:26-07:00
draft: false
bref: Time series database
toc: false
type: system
system: storage
provider: influxdb
logo: influxdb.png
app: influxdb
introducedIn: 0.1
---
{{<provider>}}

InfluxDB backend.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **address** | yes | string || InfluxDB server address | 
| **username** | yes | string || Username for InfluxDB connection | 
| **password** | yes | string || Password for InfluxDB connection | 
| **database** | yes | string || Database to use |
| **batchSize** || int | `10` | Number of records to store in-memory before performing a transaction | 