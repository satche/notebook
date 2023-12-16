---
aliases: []
tags: []
---

# Performance

[Performance](https://wikipedia.org/wiki/computer_performance) defines the amount of useful work accomplished by a system. As a quality attribute, we want to response to an event arriving within some time constraint.

## Scenario

- **Source**: external, internal
- **Stimulus**: event arrival pattern (fixed frequency, probability, random)
- **Artifact**: system services
- **Environment**: normal, overload
- **Response**: change operation mode ?
- **Measure**: latency, deadline, throughput, miss rate, data loss

### Example

Performance on crossing gate controller
- **Source**: external (arriving train)
- **Stimulus**: 
- **Artifact**: system services
- **Environment**: normal, overload
- **Response**: change operation mode ?
- **Measure**: latency, deadline, throughput, miss rate, data loss

## Tactics

Resources examples: CPU, RAM, storage, network, etc.

### Resource Demand

- Relevant algorithms
- Threading / multi-threading / parallelism
- Reduce data (size, frequency)
- Reduce code, refactoring

### Resource management

- Concurrency (horizontal scaling)
- Maintain copies (e.g. system state)
- Allocation according to task
- Arbitration among components