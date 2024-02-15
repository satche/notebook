---
aliases: [Reliability, Performance, Robustness, Fault tolerance]
tags: []
---

# Availability

[Availability](https://wikipedia.org/wiki/availability) is the proportion of time a system is in a functioning condition. It is closed link with notions of performance, reliability and robustness.

Robustness = Fault Tolerance + Recoverability

## Scenario

- **Source**
  Internal or external from the system
- **Stimulus**
	- Omission: a component fails to respond to an input
	- Crash: a component repeatedly suffers omission faults
	- Timing: a component responds too late/early
	- Response: a component responds with an incorrect value
- **Artifact**
  Processor, process, communication channel, storage
- **Environment**
  Normal mode / save mode, first failure, repeated failure
- **Response**
  Fault detection and isolation, recovery, user/system notifications
- **Measure**
  Availability percentage/intervals, time to detect/repair

## Tactics

### Fault detection

- **Ping/echo**
- **Monitoring**: display errors in real-time (like car warning lights)
- **Heartbeat**: send a health-check every at a certain frequency
- **Timestamp**: detect incoherences in a sequence of event.
- **Sanity check**: data-validation (e.g. checksum).
- **Voting**: find aberrations according the mean of data coming from multiple sources.
- **Exception detection**: variable length, data-type, division by 0, etc.
- **Self-test**: component run process to regulate itself. It requires it to be isolated to avoid being influenced.

### Faults recovery

#### Preparation & Repair

- **[Redundancy](https://wikipedia.org/wiki/redundancy_(engineering))**: data duplication ([hot spare](https://wikipedia.org/wiki/hot_spare), [RAID](https://wikipedia.org/wiki/raid), etc.)
- **Exception handling**
- **Rollback**: come back to last known functional state
- **Upgrades**: patches and fixes on one, many or all nodes
- **Retry**: sometimes, rebooting solve the problem, especially in instable domains (network, sensors, …)
- **Ignore**: sometimes, error is not critical enough
- **Degradation**: sacrifice components or features
- **Reconfiguration**

#### Reintroduction

- **Shadowing**: limit components or features (e.g. save boot mode on an OS)
- **State synchronization**: backup and redundancy of functional state before crash
- **Escalating restart**: reactivate components step-by-step, with different levels of granularity

### Faults prevention

- **Removal from service**: taking components offline
- **Transactions**: canceling on error (e.g. ACID)
- **Prediction**: anticipation (e.g. high workload among time)
- **Increase Competence Set**: hire domain professionals