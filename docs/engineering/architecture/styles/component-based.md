---
aliases: []
tags: []
---

# Component-based

[Component-based](https://wikipedia.org/wiki/component-based_software_engineering) architecture focus on [reusability](../principles/dry.md) and [separation of concerns](../principles/separation-of-concerns.md) principle.

## Component

- A building block from a system
- A concrete implementation in the code, not an abstract concept
- Deployable and replaceable
- Component can be grouped together to form packages

## Interface

To communication with each other, component provide [interfaces](https://wikipedia.org/wiki/interface_(computing)) which act as [contracts](../paradigms/design-by-contract.md).

- An interface’s implementation shall do what its methods says it does
- An interface's implementation shall do no harm
- If an implementation is unable to perform its responsibilities, it shall notify its caller