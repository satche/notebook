---
aliases: [Stateless, Stateful]
tags: []
---

# Protocols

## Stateless / Stateful

In a [statless protocol](https://wikipedia.org/wiki/stateless_protocol), the receiver (server) doesn't store session's state. The client has the responsibility to give all the necessary information through the request to fulfill it. Examples: IP, HTTP, …

It's the opposite in a stateful protocol, where the receiver may retain session state from previous requests. Examples: TCP, FTP, …

### SSH

- https://grahamhelton.com/blog/ssh-cheatsheet/