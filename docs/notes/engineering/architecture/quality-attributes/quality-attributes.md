---
aliases: [QA, Non-functional requirement, NFR, Ilities, SQuaRE]
tags: []
---

# Quality Attributes

[Quality attributes](https://wikipedia.org/wiki/non-functional_requirement) (QA) allow to do an overall assessment appreciation of a system.

## 6 Parts Scenario

|Part|Description|Examples|
|-|-|-|
|Source|Where stimulus come from, what generated it | Human, software, hardware, physical infrastructure or environment|
|Stimulus|Event or a condition that trigger the stimulus | Omission, crash, timing, response|
|Artifact| What components is concerned, where the stimulus apply | Storage, process, component, view|
|Environment| Circumstances and condition when stimulus occur | Startup, shutdown, operation|
|Response| How the system should respond after stimulus occurs | Log, disable, kick, ban, prevent|
|Measure| How to determine the response is satisfactory | Time/interval of availability, number/proportion of faults handled|

## Tactics

Tactics are design decisions that influence a QA response to a stimulus. You can use the following as a checklist:

- **Allocation of responsibilities**: Basic function of system, infrastructure, architecture, …
- **Coordination model**: Communication protocol, async/sync, stateful/statless, …
- **Data model**: RDBMS, NoSQL, structure, volume, stockage, access, backups, security, …
- **Resources management**: CPU, virtualization, parallelization, containers, threads, servers, …
- **Architectural element mapping**: Logical to physical entities, i.e. threads, processes, processors, …
- **Binding time decisions**: Update frequency, trigger conditions, automations, …
- **Technology choices**: Language, database, framework, …

## Acronyms

- FURPS
- RASUI
- RASR
- ACID
- RAMS

## Resources

- [List of quality attributes](https://wikipedia.org/wiki/list_of_system_quality_attributes) – Wikipedia
- [ISO 25010 (9126)](https://wikipedia.org/wiki/iso/iec_9126) – International standard for product quality evaluation
- [System Quality Attributes](https://people.ece.ubc.ca/matei/eece417/bass/ch04lev1sec3.html) – University of British Columbia
***
[Availability](availability.md)
[Interoperability](interoperability.md)
[Maintainability](maintainability.md)
[Performance](performance.md)
[Scalability](scalability.md)
[Security](security.md)
[Testability](testability.md)

