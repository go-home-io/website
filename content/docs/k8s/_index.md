---
title: k8s install
description: Preparing your RPi cluster
date: 2018-07-25T01:20:24-07:00
draft: false
weight: 30
bref: Detailed documentation with all steps required for your home cluster
toc: false
type: doc
logo: k8s.png
---
This section will guide you through the whole process of running [kubernetes](https://kubernetes.io) cluster on a Raspberry Pi machines.

#### Why so complicated?

Even though go-home doesn't require the whole cluster and can be executed in Docker or by running a standalone binary, it was designed with k8s in mind. All 3rd-party [applications]({{<relref "/apps">}}) will be supplemented with [helm](http://helm.sh) charts, made them very easy to deploy.

In addition, k8s is very robust orchestrator and allows to easily balance your go-home installation. And clustering is the main idea behind go-home. 

If you don't want to run RPi cluster, you still can leverage most of the provided Charts by running [minikube](https://github.com/kubernetes/minikube).

#### I don't want to run k8s, where can I find Docker images? 

All components and 3rd-party apps will have at least two versions: `arm32v6/v7` and `amd64`. If application's authors are not supporting arm out of the box, images are going to be published on [go-home hub](https://hub.docker.com/u/gohomeio/) . 

> Please refer to particular application's documentation for details how to run it.

#### Ok, k8s sounds cool, what do I need?

You'll need at least 3 RPi, model B is better, 1 SD card and USB sticks for every node in your cluster. You still can run everything on regular SD cards, but in terms of data-safety USB is much better. Not to mention that 32GB USB is cheaper than 16GB SD card nowadays. 

{{<warning "Make sure that your USB drive is 3.0. \"Samsung 32GB USB 3.0 Flash Drive Fit (MUF-32BB/AM)\" showed a very good results.">}} 
 
#### OMG, there's like ten thousand steps?!

Yes, unfortunately initial setup will take probably 3-4 hrs of your time. Automation through Ansible is one of the top priorities, it will be much easier then.  