---
aliases: []
tags: []
---

# Load balancing

[Load balancing](https://wikipedia.org/wiki/load_balancing_(computing)) is the principle of efficiently distributing tasks over resources to avoid overload.

**Dedicated / central Load balancer**
- Runs in separate process
- Shared by clients, for multiple services
- Possible bottlenecks

**Client-side Load balancer**
- Implemented/used as a library
- Client decide which service instant to connect
- Require registry to have an overview

## Circuit breaker

The circuit breaker avoid requests overload of a service by cutting requests before it’s to late. The application won’t waste resources (RAM, CPU) on requests that will never return anyway

**State**
- Closed: count the number of failed requests. Passed a certain threshold, state pass to open and rester after a certain amount of time
- Open: requests are blocked. The state pass to half-open after some time or by sending request to himself as health check
- Half-open: only some request pass. Switch to one or other state depending of amount of succeeded/failed requests

## Scheduling

- [Round-robin](https://wikipedia.org/wiki/round-robin_scheduling): circular scheduling