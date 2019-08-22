---
title: Web page
description: Screenshots of a web page
date: 2018-09-21T10:22:47-07:00
draft: false
toc: true
type: device
device: camera
provider: web
logo: web.png
introducedIn: 0.1
updateType: pull
app: chrome
---
{{<device>}}

Web page emulates camera to deliver a screenshot of a page. Since we can't
guarantee that the web source is in the same network where master server is,
we have to use worker to proxy this process.

Web page requires headless Chrome running in the same network with a worker.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **address** | true | string || URL of a web page to take screenshots of. If protocol is not specified, `http:` will be used |
| **chromeAddress** | true | ipv4 || Chrome IP address |
| **chromePort** || int | `9222` | Chrome debug API port |
| **pollingInterval** || int | `30` | Interval in seconds to wait between pulling updates from Chrome |
| **reloadInterval** || int | `0` | Interval in minutes to wait before reloading original page: sometimes Chrome hangs on a gif images, this will help to prevent the issue |
| **width** || int | `800` | Emulated page width |
| **height** || int | `600` | Emulated page height |

> Note that **width** is "overriding" default camera's setting and used instead
for Chrome's page width.

To configure emulator's resolution, you can use Chrome developer tools.
Select `Responsive` from the devices' dropdown.

{{<image "web_1.png">}}

### Supported properties

| Property | Type | Description |
|----------|------|-------------|
| **picture** | string | Base64-encoded string of JPEG image |
| **distance** | int | [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) |

### Supported commands

| Command | Input | Description |
| --------|-------|-------------|
| **take-picture** || Forces to take a screenshot |

### Example

```yaml
system: device
provider: camera/web
address: https://www.ready.noaa.gov/data/forecast/grads/nam/panel10/anim.gif
chromeAddress: 127.0.0.1
pollingInterval: 15
reloadInterval: 10
width: 760
height: 587
quality: 50
```
