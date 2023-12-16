---
aliases: [Pub-Sub, Pub/Sub]
tags: []
---

# Publish-subscribe

The [publish-subscribe](https://wikipedia.org/wiki/publish%e2%80%93subscribe_pattern) pattern provides an event bus ([message broker](https://wikipedia.org/wiki/message_broker)) where publishers can send messages and subscribers can receive them. One like the other don't have a knowledge of who are the publishers/subscribers, they just interact with this common repository.

It's similar to the [Blackboard](../patterns/blackboard.md) architecture, but events are shared instead of data. It's also similar to [observer](../patterns/observer.md) pattern, but the publishers don't have to maintain a list of subscriber, which is handled by the event bus.