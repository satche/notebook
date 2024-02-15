---
tags: [algorithm, algorithm/problem]
---

# Knapsack problem

The [knapsack problem](https://wikipedia.org/wiki/knapsack_problem) is a combinatorial optimization problem, used in resource allocation. It can concern for example: minimal waste in material cutting, selection of investements, cryoptgraphy, etc.

Picture someone who needs to feel a backpack with objects which has weight and values. The goal is to put as much valuable objects in the backpack without excessing the maximum capacity.

## Algorithm

- [Greedy algorithm]: you can add object in the backpack according to its value, weight or value-weight ratio.
- [Tabu search](../search/tabu-search.md): iterates the selection of objects by taking the most valuable one. When an object is added in the backpack, define a rule on how many iterations it should stay inside. Define a stopping criteria (e.g max. iterations).
