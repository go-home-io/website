---
title: Glob syntax
description: Regexp-like syntax
date: 2018-07-23T15:22:34-07:00
draf: false
weight: 20
bref: Glob is used to wildcard multiple entities
toc: true
type: doc
---

[Glob](https://en.wikipedia.org/wiki/Glob_(programming)) is a matching pattern, used in most OSes. In go-home glob matching is powered by [globwas/glob](https://github.com/gobwas/glob) library.

Most systems support wildcarding entities using glob patters. 

{{<warning "Don't overdo wildard usage as it may result in unexpected behavior.">}}

### Syntax
|Wildcard|Description|
|--------|-----------|
| `*` | Matches any number of any characters including none |
| `?` | Matches any single character |
| `[abc]` | Matches one character given in the bracket |
| `[a-z]` | Matches one character from the range given in the bracket |
| `[!abc]` | Matches one character that is not given in the bracket |
| `[!a-z]` | Matches one character that is not from the range given in the bracket |

### Examples

- `hue.light.*` will select all light entities exposed by HUE hub. If both groups and lights are exposed, all of them will be selected. 
- `hue.light.[!g]*` will select only lights, as groups will be filtered by `[!g]` exclusion.

