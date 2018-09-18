---
title: Xiaomi
description: Xiaomi vacuum cleaner
date: 2018-09-17T22:01:41-07:00
draft: false
toc: true
type: device
device: vacuum
provider: xiaomi
logo: xiaomi.jpeg
introducedIn: 0.1
updateType: internalPull
---
{{<device>}}

Plugin provides control of Xiaomi vacuum (gen 1 and 2). 

To begin using this plugin you need to obtain a token from the device. There're multiple options available, unfortunately all of them are kinda complicated. Since the last few versions vacuum changes its token after paring with the app and no longer advertises it. Below are possible ways to get it. 

### iOS app

1. Connect vacuum through the Mi-Home app
1. Create an unencrypted backup of your phone using iTunes
1. Install [iBackup Viewer](http://www.imactools.com/iphonebackupviewer/)
1. Go to `com.xiaomi.mihome`
1. Extract file `123456789_mihome.sqlite`
1. Install [SQLite Browser](http://sqlitebrowser.org) and load your file
1. Run the following query `SELECT ZTOKEN FROM ZDEVICE WHERE ZMODEL LIKE "%vacuum%"` and copy 32-digit token
1. Run the following command in your terminal

```bash
echo '0: <YOUR HEXADECIMAL STRING>' | xxd -r -p | openssl enc -d -aes-128-ecb -nopad -nosalt -K 00000000000000000000000000000000
```

### Android app

{{<warning "Latest app version is no longer storing token on the device and instead uses calls to Xiaomi Cloud.">}}

1. Downgrade your Mi-Home app to [5.0.0 version](https://www.apkmirror.com/apk/xiaomi-inc/mihome/mihome-5-0-0-release/)
1. Enable developer mode and USB debugging on your phone 
1. Install [ADB tools](https://developer.android.com/studio/releases/platform-tools.html)
1. Create a backup of the application `adb backup -noapk com.xiaomi.smarthome -f backup.ab`
1. Confirm backup on your phone **WITHOUT** password
1. Install [ADB Backup Extractor](https://sourceforge.net/projects/adbextractor/)
1. Extract everything from the backup `java(.exe) -jar abe.jar unpack backup.ab backup.tar`, extract `.tar` archive
1. Install [SQLite Browser](http://sqlitebrowser.org) and load your file
1. Run the following query `select token from devicerecord where name like "%Vacuum%"`

### Custom firmware

This method requires installing DustCloud custom firmware to obtain the root. Refer to the [official documentation](https://github.com/dgiese/dustcloud/wiki/VacuumRobots-manual-update-root-Howto) for details. 

> It's much easier to install through flasher.py.

> If you have the latest firmware installed on your vacuum, do the [factory reset](https://github.com/dgiese/dustcloud/wiki/Xiaomi-Vacuum-Robots-Factory-Reset) first.

After DustCloud is installed, ssh into the device and get your token: 

```bash
printf $(cat /mnt/data/miio/device.token) | xxd -p
```

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **ip** | yes | ipv4 || IP address of the vacuum |
| **key** | yes | string || Vacuum encryption key |

### Supported properties

| Property | Type | Description |
|----------|------|-------------|
| **vac_status** | status | Status of the vacuum | 
| **battery_level** | percent | Current battery level | 
| **fan_speed** | percent | Current fan speed | 
| **area** | float | Last cleaned area | 
| **duration** | float | Time of the last cleaning |

### Supported commands

| Command | Input | Description |
| --------|-------|-------------|
| `on` || Turns the device on |
| `off` || Turns the device off |
| `pause` || Pauses the device |
| `dock` || Send vacuum to the dock station | 
| `find-me` || Makes vacuum to play `Find Me` sound |
| `set-fan-speed` | percent | Sets the fan speed |

### Example

```yaml
system: device
provider: vacuum/xiaomi
name: vacuum
ip: 192.168.0.31
key: 476d424348304f414776726d3330786e
```