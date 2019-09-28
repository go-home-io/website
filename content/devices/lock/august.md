---
title: August
description: August Smart Lock
date: 2019-08-25T11:10:50-07:00
draft: false
toc: true
type: device
device: lock
provider: august
logo: august.png
introducedIn: 0.1
updateType: externalPull
---
{{<device>}}

August Smart Lock allows you to remotely lock/unlock your door. Locks support
multiple communication protocols like bluetooth, remote.
`go-home` supports only remote one. It means you'll need to setup [August Connect](https://august.com/products/august-connect)
beforehand.

This provider supports secret storage and will automatically persist auth
token upon obtaining/refreshing. Secret name has format
`<august-lock>-<installID>` where `installID` is a concatenation of strings
`gohome` and either `installId` or `lockId` if first one is empty. For example
`august-lock-gohomemylock`.

To authorize `go-home` for API access, you'll have to do second factor authentication.
Upon startup, if token is empty, provider will attempt to request a verification
token to be sent through the **loginMethod** channel. You'll have to enter this
token through the UI to register the provider.

Upon initial connect, provider will query all locks and output short details
to the log. You can use it to look up **lockId** if you have more than one locks.

> Don't change **installId** when you're adding a **lockId** to prevent token re-generation.

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **loginMethod** | yes | string | `email` | Which method was used for user registration |
| **username** | yes | string || User name |
| **password** | yes | string || Password |
| **token** || string || Authentication token if you know it |
| **lockId** | yes* | string || Lock Identifier used in august API. If **lockId** is not specified, plugin will use first available lock |
| **installId** | yes* | string || Random name for this API authorization. Either **lockId** or **installId** has to be defined. For example, you can use any random number here |
| **pollingInterval** || int | `30` | Interval in seconds to wait between pulling updates from the lock. Minimal value is `2` seconds |

#### Supported login methods

- `email`
- `phone`

### Supported properties

| Property | Type | Description |
|----------|------|-------------|
| `on` | bool | Flag indicating whether lock is opened |
| `battery_level` | percent | Current battery level |

### Supported commands

| Command | Input | Description |
| --------|-------|-------------|
| `on` || Turns the device on |
| `off` || Turns the device off |
| `toggle` || Toggles the device state |

### Example

```yaml
system: device
provider: lock/august
name: front door
username: 123....
password: {{ sec "lock-secret" }}
loginMethod: phone
installId: mylock
```
