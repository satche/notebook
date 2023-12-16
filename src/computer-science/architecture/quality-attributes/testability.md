---
aliases: []
tags: []
---

# Testability

[Testability](https://wikipedia.org/wiki/software_testability) is how a system can run relevant test, usually to find problems. 

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

### Control and observation

Improve control and observation of the system state

- Logs
- Record / playback
- Data abstraction (simulate user inputs)
- Sandboxing: isolate system in a close environment
- Executable assertion (unit tests)

### Complexity

- Limit system complexity: sometime, too much randomness make it difficult to reproduce the problem (e.g. blackboxes).