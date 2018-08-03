---
title: Installing k8s
description:
date: 2018-07-25T01:21:00-07:00
draf: false
weight: 20
bref: Step-by-step guide for installing k8s on RPi
toc: false
type: doc
logo: k8s.png
---

> This guide is based on an awesome [gist](https://gist.github.com/alexellis/fdbc90de7691a1b9edb545c17da2d975) from **alexellis**.

SSH to all nodes and update packages:

```bash
sudo apt-get install && sudo apt-get upgrade
```

Install latest docker: 
```bash
curl -sSL get.docker.com | sh && sudo usermod pi -aG docker
```

Disable all swap: 

```bash
sudo dphys-swapfile swapoff && \
  sudo dphys-swapfile uninstall && \
  sudo update-rc.d dphys-swapfile remove
```

Edit `/boot/cmdline.txt` and append following records to the end of the file:

```bash
cgroup_memory=1 cgroup_enable=cpuset cgroup_enable=memory
```

{{<warning "Don't create any new lines.">}}

Install `kubeadm`:

```bash
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add - && \
  echo "deb http://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list && \
  sudo apt-get update -q && \
  sudo apt-get install -qy kubeadm
```

Start `kubeadm` on **master** node, wait for about 15 minutes and copy your join token which will be an output of the operation:

```bash
sudo kubeadm init --token-ttl=0 --apiserver-advertise-address=192.168.0.100 --pod-network-cidr=10.244.0.0/16
```

{{<warning "Token's ttl 0 is fine for test purposes only, in general you don't want to have infinite tokens.">}}

Copy content of `$HOME/.kube/config` to your host machine, you'll need it to access the cluster. 

Now run on every **worker** node: 

```bash
sudo kubeadm join 192.168.0.100:6443 --token TOKEN --discovery-token-ca-cert-hash sha256:HASH
```

Wait till process finishes and check if everything is fine. You should see something similar: 

```bash
kubectl get node
NAME           STATUS    ROLES     AGE       VERSION
k8s-agent-1    Ready     <none>    3m        v1.11.1
k8s-agent-2    Ready     <none>    2m        v1.11.1
k8s-agent-3    Ready     <none>    2m        v1.11.1
k8s-master-1   Ready     master    1h        v1.11.1
```

Last thing is to deploy [helm](https://helm.sh) which is a great package manager and used for all go-home applications.
First create a new service account and role binding to allow helm control your cluster. 

> Please refer to [official](https://github.com/helm/helm/blob/master/docs/rbac.md) documentation for other use-cases.

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: tiller
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: tiller
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
  - kind: ServiceAccount
    name: tiller
    namespace: kube-system
```

Then deploy arm-compatible tiller:
 
```bash
helm init --tiller-image=jessestuart/tiller:v2.9.1 --service-account=tiller
```

After a few minutes you should see `tiller` pod running in `kube-system` namespace.