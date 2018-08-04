---
title: Mappers
description: Config mappers
date: 2018-08-04T13:24:17-07:00
draf: false
weight: 40
bref: Data conversion in config files
toc: true
type: doc
logo:
---

Sometimes it's necessary to do complex data translation or to have function-kind of logic. To allow such things, `go-home` provides mappers. Mappers are set of functions which could be applied for data-transformation.

Mappers are using [govaluate](github.com/Knetic/govaluate) library. 

### Supported functions

* `num` -- converts value to number (`float64` to be precise)
* `str` -- converts value to string 
* `fmt` -- formats data using `fmt.Sprintf`
* `jq` -- JSON operations

#### jq 

If `jq` is invoked with an object only, function returns un-marshaled `map[string]interface{}` data. 

If `jq` is invoked with object and expression, function tries to apply [jq](https://stedolan.github.io/jq/) syntax and execute it over the object. 

### Read 

Read mapper is passing received `payload` into mapper method and expects to receive single object.

For example, you can map received MQTT payload into device state.

### Write

Write mapper is passing invoking object into mapper method nad expects to receive single object.

For example, you can use device state to map it into desired MQTT command. 

### Examples

The following expression will return true 
```bash
jq(payload, '.status.value') == 'true'
```

with the following `payload`
```json
{
  "status": {
    "value": true
  }
}
```

The following expression will return `on`: 
```bash
(state.On == true) ? 'on' : 'off'
```

with the following device `state`:
```go
LightState{
	On: true,
}
``` 

The following expression will return `r:10,g:20,b:30`: 

```bash
fmt('r:%v,g:%v,b:%v', state.Color.R, state.Color.G, state.Color.B)
```

with the following device `state`:

```go
LightState{
    On: true,
    Color: common.Color{
        R: 10,
        G: 20,
        B: 30,
    },
}
```