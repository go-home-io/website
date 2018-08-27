---
title: Preparation
description: Preparing your RPis 
date: 2018-07-25T01:21:12-07:00
draft: false
weight: 10
bref: Making initial configuration for the devices
toc: false
type: doc
logo: rpi.png
---

[Download](https://www.raspberrypi.org/downloads/raspbian/) Raspbian Lite and flash it to SD card and all USBs. 

> Default user is `pi`, password is `raspberry`. 

On a first RPI boot from SD card and upgrade all: 

```bash
sudo apt-get install && sudo apt-get upgrade
```

Add the following line to the end of `/boot/config.txt`

```bash
program_usb_boot_mode=1
```

{{<warning "Don't create any new lines.">}}

Reboot device and validate that USB boot is enabled: 

```bash
$ vcgencmd otp_dump | grep 17
17:3020000a
```

Boot from this SD card all others RPis. At this point you can start booting from USB sticks. 

On every node you need to setup static IP in `/etc/dhcpcd.conf` (use your network): 

```bash
profile static_wlan0
static ip_address=192.168.0.101/24
static routers=192.168.0.1
static domain_name_servers=8.8.8.8
``` 

> You may choose to setup static IPs through your router.

Then setup through `raspi-config`: 

* WiFi connection
* Host name, e.g. `k8s-master-1`, `k8s-worker-1`, `k8s-worker-2`, etc. 
* Change pi password 
* Enable `sshd` server