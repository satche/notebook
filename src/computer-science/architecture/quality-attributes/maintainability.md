---
aliases: [Modifiability]
tags: []
---

# Maintainability

[Maintainability](https://wikipedia.org/wiki/maintainability) is how making changes are easy and fast (and, by extension, cheap).

It's not necessarily [flexibility](https://wikipedia.org/wiki/flexibility_(engineering)), because a system can be inflexible by design but still need to be maintainable.

## Scenario

- **Source**: developer, sysadmin, user
- **Stimulus**: add/delete/modify function or quality
- **Artifact**: UI, platform, environment, external system
- **Environment**: design, compile, build, runtime, server in maintenance
- **Response**: make change, test it, deploy it
- **Measure**: effort, implementation time, cost, risk

## Tactics

- **Responsibility**: which component handle which operation ? Keep module size small, limit responsibility
- **Cohesion**: relevant distribution of responsibility (syntax and semantic)
- **Coupling**: how dependents are components between them ?