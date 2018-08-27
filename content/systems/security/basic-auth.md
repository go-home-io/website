---
title: Basic Auth
description: Default Basic Auth user storage
date: 2018-07-23T20:32:35-07:00
draft: false
bref: Simple file-based Basic Auth provider
toc: true
type: system
system: security
provider: basic
logo:
app:
introducedIn: 0.1
---
{{<provider>}}

This is a simple provider which looks for default Basic Auth header and validates against users in local file of secret storage. 

### Local file

File should be located in configs folder and named `_users`.

To generate a password `user_pwd` for a new user `user_name` run: 

```bash
htpasswd -B -n user_name
```

And add it as a new line into `_users` file:

```bash
user_name:$2y$05$dYF192wo1LbwKF7NTAQpEOYqOzmEr0SLxsctQ6LFkRaOMdSjMJY3G
```

Provider checks `Authorization: Basic` header. You can use it with `curl`: 

```bash
curl -X POST -H "Content-Type: application/json" -H "Authorization: Basic $(echo -n user_name:user_pwd | base64)"  http://localhost:8000/api/v1/device
``` 

### Secrets storage

Just place `username:password` into your secrets storage.

### Configuration options

This provider doesn't have any configuration options and is loaded by default if no other providers are specified. 