---
aliases: [DbC, interfaces]
tags: []
---

# Design by contract

[Design by contract](https://wikipedia.org/wiki/design_by_contract) (DbC) is a way to architecture a system where [components](../styles/component-based.md) force the use of their methods via interfaces.

## Conditions

- **Precondition**
	- Callers have the responsibility to respect the preconditions
	- If not, an error is raised and the interface is not implemented
	- Example: chose of topping in a pizza order is a precondition
- **Postcondition**
	- Implementers have the responsibility to respect the postconditions
	- They must be satisfied *after* an interface method is invoked.
	- Example: delivery time in a pizza order is postcondition
- **Invariant**
	- Absolute rules
	- Must remain true before and after the execution of the method
	- Example: dough is an invariant condition to cook a pizza