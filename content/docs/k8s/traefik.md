---
title: Træfik
description: Installing Træfik
date: 2018-07-26T15:30:46-07:00
draf: false
weight: 50
bref: Configuring Træfik as a cluster ingress controller 
toc: false
type: doc
logo: traefik.png
---
[Træfik](https://traefik.io) is kubernetes-ready blazing fast reverse-proxy server. Although nginx is more mature product, Træfik provides a lot of cool features out of the box, for example DNS-wildcarding through [Let's Encrypt](https://letsencrypt.org) support out of the box.

Minimal setup requires to create a following `traefik.yaml` file (for the full list of options check github [repo](https://github.com/helm/charts/tree/master/stable/traefik)):
 
{{<warning "DuckDNS is used as an example DNS registrator.">}}

You can find full list of supported DNS-providers [here](https://docs.traefik.io/configuration/acme/).
 
```yaml
ssl:
  enabled: true
  tlsMinVersion: VersionTLS12
acme: 
  enabled: true
  email: your_email
  staging: false
  logging: false
  domains: 
    enabled: true
    domainsList:
      - main: "*.your_domain"
  challengeType: dns-01
  dnsProvider:
  name: duckdns
  duckdns: 
    DUCKDNS_TOKEN: your_token
  persistence:
    enabled: true
    size: 1Gi
    storageClass: gluster
rbac:
  enabled: true
```

> If you don't want to use Let's Encrypt, just skip `acme` section.

You may want to expose your dashboard as well, for this, check `dashboard` section in Chart's repo.

Install: 
```bash
helm install stable/traefik --name traefik --namespace kube-system --values=traefik.yaml
```