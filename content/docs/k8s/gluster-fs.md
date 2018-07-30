---
title: GlusterFS
description: Installing distributed FS
date: 2018-07-26T02:22:32-07:00
draf: false
weight: 30
bref: GlusterFS with heketi provides persistent storage for your k8s cluster
toc: false
type: doc
---

[GlusterFS](https://www.gluster.org) is a distributed cluster-ready storage backend. We're going to use it together with [heketi](https://github.com/heketi/heketi) -- REST wrapper on top of Gluster. 

> Please refer for official [documentation](https://github.com/gluster/gluster-kubernetes/tree/master/docs/examples/dynamic_provisioning_external_gluster) for more details. 

Install required packages:

```bash
sudo apt-get install -y xfsprogs glusterfs-server glusterfs-client lvm2 thin-provisioning-tools
```

> In this scenario 3 worker nodes are used as Gluster backend. You can use master as well, it doesn't matter. First worker then used as heketi server. 

From first RPi do:

```bash
sudo gluster peer probe 192.168.0.101
sudo gluster peer probe 192.168.0.102
sudo gluster peer probe 192.168.0.103
```

> At this point you can either choose to use separate storage for GlusterFS or create a loop [device](https://techdev.io/en/developer-blog/deploying-glusterfs-in-your-bare-metal-kubernetes-cluster).

{{<warning "Below instructions are applicable to separate storage, for the loop device you'll have different paths. ">}} 

Get your device name: 
```bash
pi@k8s-agent-1:~ $ lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    1 29.9G  0 disk                         <- raspbian here
|-sda1   8:1    1 43.2M  0 part /boot
`-sda2   8:2    1 29.9G  0 part /
sdb      8:16   1 28.9G  0 disk                         <- second attached USB
`-sdb1   8:17   1 28.9G  0 part
```

Format you cards on every machine: 
```bash
sudo wipefs -a /dev/sdb1
```

We need to remove existing `glusterfs-server` to `glusterd` since heketi is using a new name and debian pckg is not updated yet:
```bash
sudo /etc/init.d/glusterfs-server stop
sudo mv /etc/init.d/glusterfs-server /etc/init.d/glusterd
sudo /etc/init.d/glusterd start
```

Create new `/etc/init.d/glusterfs-server`: 
```bash
#! /bin/sh

/etc/init.d/glusterd $@
```

Make it executable: 
```bash
sudo chmod +x /etc/init.d/glusterfs-server
```

Install heketi: 

```bash
wget https://github.com/heketi/heketi/releases/download/v7.0.0/heketi-v7.0.0.linux.arm.tar.gz
sudo mkdir -p /etc/heketi
sudo tar xzvf heketi-v7.0.0.linux.arm.tar.gz -C /etc/heketi
rm heketi-v7.0.0.linux.arm.tar.gz
sudo ln /etc/heketi/heketi/heketi-cli /usr/bin/heketi-cli 
sudo ln /etc/heketi/heketi/heketi /usr/bin/heketi 
```

Generate keys:
```bash
sudo ssh-keygen -f /etc/heketi/heketi_key -t rsa -N ''
sudo ssh-copy-id -i /etc/heketi/heketi_key.pub pi@192.168.0.101
sudo ssh-copy-id -i /etc/heketi/heketi_key.pub pi@192.168.0.102
sudo ssh-copy-id -i /etc/heketi/heketi_key.pub pi@192.168.0.103
```

Create service definition: 
```bash
[Unit]
Description=Heketi Server

[Service]
Type=simple
WorkingDirectory=/var/lib/heketi
EnvironmentFile=-/etc/heketi/heketi.env
User=heketi
ExecStart=sudo /usr/bin/heketi --config=/etc/heketi/heketi/heketi.json
Restart=on-failure
StandardOutput=syslog
StandardError=syslog

[Install]
WantedBy=multi-user.target
```

Start service:
```bash
sudo chown -R pi:pi /etc/heketi/heketi_key* /var/lib/heketi
sudo systemctl daemon-reload
sudo systemctl start heketi
```

Patch access in `/etc/heketi/heketi/heketi.json`:
```json
...
    executor": "ssh",
    "sshexec": {
      "keyfile": "/etc/heketi/heketi_key",
      "user": "pi",
      "sudo": true,
      "port": "22",
      "fstab": "/etc/fstab",
      "backup_lvm_metadata": false
    },
    
```


Create your topology.json:
```json
{
	"clusters": [{
		"nodes": [{
				"node": {
					"hostnames": {
						"manage": [
							"192.168.0.101"
						],
						"storage": [
							"192.168.0.101"
						]
					},
					"zone": 1
				},
				"devices": [
					"/dev/sdb1"
				]
			},
			{
				"node": {
					"hostnames": {
						"manage": [
							"192.168.0.102"
						],
						"storage": [
							"192.168.0.102"
						]
					},
					"zone": 1
				},
				"devices": [
					"/dev/sdb1"
				]
			},
			{
				"node": {
					"hostnames": {
						"manage": [
							"192.168.0.103"
						],
						"storage": [
							"192.168.0.103"
						]
					},
					"zone": 1
				},
				"devices": [
					"/dev/sdb1"
				]
			}
		]
	}]
}
```

And start add to the heketi: 

```bash
heketi-cli topology load --json=topology.json
```

Last thing is to create heketi StorageClass: 

```yaml
apiVersion: storage.k8s.io/v1beta1
kind: StorageClass
metadata:
  name: gluster
provisioner: kubernetes.io/glusterfs
parameters: 
  resturl: "http://192.168.0.101:8080"
```

```bash
kubectl create -f class.yaml && kubectl patch storageclass gluster -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
```

Now cluster is ready to provision PVCs.