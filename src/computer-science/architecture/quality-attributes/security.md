---
aliases: []
tags: []
---

# Security

Note: this is an overview of security as a quality attribute. For more information, have a look at the [Cyber security](../../cyber-security/index.md) page.

## Scenario

- **Source**: reckless employee, hacker, group of hackers, bots, …
- **Stimulus**: type of attack
- **Artifact**: system's resources (infrastructure, network, data, …)
- **Environment**: in which state is the system under attack
- **Response**: how the system resist
- **Measure**: recovery time

## Tactics

### Detection

- **Intrusion**: maximum password try, suspicious location, …
- **Service denial**: IPs blacklist, workload measure, …
- **Message integrity**: hash, checksum, signature, cryptography, certificates, …
- **Message delay**: caused by MITM attacks, …

### Resistance

- **Authentication**: check identify, password, certificate, key-pairs, biometric, 2FA, …
- **Access control**: restrict port opening, single point access, session duration, …
- **Encryption**: symmetric, asymmetric, …
- **Entities separation**: isolate parts of the system (hardware, software, …)
- **Configuration**: change default settings

### Reaction

- **Revoke access**: under conditions (frequency, location, timing, …)
- **Lock computer**
- **Inform actors**: sensibilisation, prevention, human intervention, system notification, …

### Recovery

See: [Availability](availability.md)