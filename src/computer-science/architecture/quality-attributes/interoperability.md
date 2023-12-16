---
aliases: []
tags: []
---

# Interoperability

[Interoperability](https://wikipedia.org/wiki/interoperability) is a criteria that define how well a system can interact and exchange with other systems.

## Scenario

- **Source**: a system
- **Stimulus**: a request to exchange information among system(s)
- **Artifact**: the system that wish to interoperate
- **Environment**: how system are discovered (before or during runtime)
- **Response**: request rejected/accepted, people or system are notified
- **Measure**: percentage of exchanged data correctly processed/rejected

### Example

A vehicle send location data to traffic monitoring system. It combines these data with other ones and display it on Google Maps.
- **Source**: vehicle information system
- **Stimulus**: current location
- **Artifact**: traffic monitoring system
- **Environment**: system known at prior runtime
- **Response**: traffic monitor combien current location with other data and display in on Google Maps
- **Measure**: Data included correctly 99.9% of time

## Tactics

- **Locate**: directory service, search criteria, …
- **Orchestrate**: use of standards to enforce compatibility, scripts
- **Tailor interfaces**: add translations, hide function to untrusted users, use design patterns, …