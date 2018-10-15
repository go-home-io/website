---
title: GPIO
description: GPIO enabled devices
date: 2018-10-06T17:29:13-07:00
draft: false
weight: 20
bref: Configuration of your RPi to support GPIO devices
toc: false
type: doc
logo:
---

To communicate with GPIO devices either SPI ([Serial Peripheral Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface)) or I²C ([Inter-Integrated Circuit](https://en.wikipedia.org/wiki/I²C)) bus is used. 

To configure your device you need to specify control pins, use physical numbers. You can find neat pinout reference [here](https://pinout.xyz).

### SPI

To enable SPI device you need to use 

```bash
sudo raspi-config
```

Go to #5 Interfacing options and enable `P4 SPI` kernel module.

> There's a known issue with SPI access on a certain version of Raspbian image, please refer to this [thread](https://github.com/raspberrypi/linux/issues/1547) for troubleshooting.

Usually when configuring device in `go-home` you need to specify bus and device ID, they're required for accessing correct device under `/dev/spidev<X>.<Y>` where `X` is a bus and `Y` -- device.

### I2C

To enable I²C device you need to use 

```bash
sudo raspi-config
```

Go to #5 Interfacing options and enable `P5 I2C` kernel module.
