---
aliases: [SAT]
tags: [algorithm]
---

# Boolean Satisfiability Problem

In [Boolean Satisfiability Problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem) (SAT), we try to solve a formula composed of boolean expressions. If we find a way so the formula is true, it is *satisfiable*.

For example, the formula `(A OR B) AND (A AND NOT B)` is satisfiable if `A` is true and `B` is false.

## Cook-Levin theorem

The [Cook-Levein theorem](https://en.wikipedia.org/wiki/Cook%E2%80%93Levin_theorem) says that the SAT problem is [NP-Complete](../complexity.md#NP).

It also says that any NP problem can be reduced to an instance of a SAT problem. It means that if we can solve it in polynomial time, we can solve any NP problem in the same way, and the [P vs. NP](p-vs-np.md) problem would be solved.