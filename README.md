This repo contains `go-home` [webite](https://go-home.io).

### Static generation

Website is staticly generated, using [Hugo](http://gohugo.io) and based on the awesome [Kube](http://kube.elemnts.org) theme.

To install Hugo, refer to official [documentation](http://gohugo.io/getting-started/installing/).

### Creating a new entry

```
hugo new --kind kind kinds/type/name.md
```

Where `kind` is one of:
- `system` -- supported system overview
- `device` -- supported device description
- `doc` -- generic documentation

For example, creating a new trigger provider should look like 

```
hugo new --kind system systems/trigger/state.md
```

If you're creating a new `type` of system/device/etc., `_index.md` should be used as a name. This document describes generic parameters related to all provders. 

For example, creating a new service bus system should look like: 

```
hugo new --kind system systems/bus/_index.md
```

### Running a server

After adding required pages, simply run 

```
hugo server -D --ignoreCache --noHTTPCache --verboseLog --verbose
```

Hugo tracks all changes made to files and re-generates html, so no need to restart server upon changes.