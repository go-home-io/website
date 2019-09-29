---
title: Telegram
description: Telegram message.
date: 2019-09-29T13:47:40-07:00
draft: false
bref: Sending a text message through the Telegram API
toc: true
type: system
system: notification
provider: telegram
logo: telegram.png
app:
introducedIn: 0.1
---
{{<provider>}}

This provider allows you to configure your own bot to send out
notifications directly to the Telegram group or personal channel.

To create a bot, first you need to add an existing bot *[BotFather](https://telegram.me/botfather)*
to your contacts and use a `/newbot` command.
As a response you should receive an auth token for your newly created bot,
something like `110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`.

If you forgot your auth token, you can always use `/token` command
with *BotFather* to generate a new one.

Next step is to get a correct Chat ID. To do so, add your bot to a target group
(or just message him if you want to send private messages) and open the
following URL `https://api.telegram.org/botYOUR_KEY/getUpdates` e.g.
`https://api.telegram.org/bot110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw/getUpdates`

In the response you need to find an ID of a chat object in a message.
Something like this:

{{<image "telegram-bot-register.png">}}

### Configuration options

| Param | Required | Type | Default | Description |
|-------|----------|------|---------|-------------|
| **token** | yes | string || An auth token received from a *BotFather* |
| **chat** | yes | string || Chat ID to sent message to |

### Example

```yaml
system: notification
provider: telegram
name: my place
token: "111111111:key"
chat: -1111
```
