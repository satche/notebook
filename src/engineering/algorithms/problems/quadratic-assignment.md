# Quadratic Assignment Problem

The [Quadratic Assignment Problem](https://en.wikipedia.org/wiki/Quadratic_assignment_problem) (QAP) is stated like this:

There are a set of *n* facilities and a set of *n* locations. For each pair of locations, a *distance* is specified and for each pair of facilities a *weight* or *flow* is specified (e.g., the amount of supplies transported between the two facilities).

The problem is to assign all facilities to different locations with the goal of minimizing the sum of the distances multiplied by the corresponding flows.

## Complexity

This problem is [NP-Hard](../complexity.md#NP): we don't know any algorithm to solve this quickly (i.e., in polynomial time).