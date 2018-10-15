---
title: k8s dashboard
description: Kubernetes dashboard
date: 2018-09-22T20:39:40-07:00
draft: false
weight: 60
bref: Web-based dashboard for the cluster
toc: false
type: doc
logo: k8s.png
---

[k8s dashboard](https://github.com/kubernetes/dashboard) is a web-based application which provides you with the access to every entity inside your cluster. It might be suitable if you need remote access to the cluster. 

Dashboard requires a certificate to run with, so you can use the following script to generate one, in addition this script will create a basic auth secret for Træfik. 

```bash
set -e 

kubectl delete secret k8s-auth -n kube-system --ignore-not-found=true
rm -rf auth
htpasswd -c auth <your_user>
kubectl create secret generic k8s-auth -n kube-system --from-file=auth

helm install stable/kubernetes-dashboard --namespace=kube-system --name k8s-dashboard --values=values.yaml
```

Before running the script, create `values.yaml` file with your configuration: 

```yaml
extraArgs:
  - --system-banner="Welcome to go-home"
image: 
  repository: k8s.gcr.io/kubernetes-dashboard-arm
ingress:
  enabled: true
  hosts: 
    - your_domain
  annotations:
    kubernetes.io/ingress.class: traefik
    traefik.ingress.kubernetes.io/redirect-entry-point: https
    traefik.ingress.kubernetes.io/redirect-permanent: "true"
    ingress.kubernetes.io/auth-type: basic
    ingress.kubernetes.io/auth-secret: k8s-auth
rbac:
  clusterAdminRole: true

```