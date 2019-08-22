# [go-home.io](https://go-home.io) website

[![Netlify Status](https://api.netlify.com/api/v1/badges/29b86cca-d9fb-4a8c-91fc-5535766de8cf/deploy-status)](https://app.netlify.com/sites/go-home-io/deploys)
[![Build Status](https://travis-ci.com/go-home-io/website.svg?branch=master)](https://travis-ci.com/go-home-io/website)

## Static generation

Website is statically generated, using [Hugo](http://gohugo.io) and based on
the awesome [Kube](http://kube.elemnts.org) theme.

To install Hugo, refer to official [documentation](http://gohugo.io/getting-started/installing/).

## Creating a new entry

```bash
hugo new --kind kind kinds/type/name.md
```

Where `kind` is one of:

- `system` -- supported system overview
- `device` -- supported device description
- `doc` -- generic documentation
- `app` -- [helm](https://helm.sh)-based [application](https://github.com/go-home-io/helm)

For example, creating a new trigger provider should looks like

```bash
hugo new --kind system systems/trigger/state.md
```

If you're creating a new `type` of system/device/etc., `_index.md` should be used
as a name. This document describes generic parameters related to all providers.

For example, creating a new service bus system should looks like:

```bash
hugo new --kind system systems/bus/_index.md
```

## Running a server

After adding required pages, simply run

```bash
hugo server -D --ignoreCache --noHTTPCache --verboseLog --verbose
```

Hugo tracks all changes made to files and re-generates html, so no need to
restart server upon changes.

## Linter

To verify documents, please use [markdownlint](https://github.com/DavidAnson/markdownlint)
before commit. Even tho deployment to Netlify won't fail, Travis's CI build will.

## Make targets

- `install-linter` -- installing linter [cli](https://github.com/igorshubovych/markdownlint-cli)
- `lint` -- running linter
- `hugo` -- running Hugo dev server (current version is `0.57.2`)
