---
title: Cameras
device: camera
introducedIn: 0.1
updateType:
shared: true
---

Cameras are sending an updated image only in case motion was detected.
[Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance)
algorithm is used to determine the difference between two images.

Each camera has the following three optional configuration properties:

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| **distance** | int | `15` | Distance to react |
| **quality** | percent | `50` | JPEG quality |
| **width** | int | `800` | Final picture's width (aspect ratio is preserved) |

> By default pictures are not persisted through
[Storage system]({{<relref "/systems/storage">}}), you need to enable them explicitly.
