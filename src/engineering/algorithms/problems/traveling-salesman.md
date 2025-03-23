---
aliases: [TSP]
tags: [algorithm, algorithm/problem]
---

# Traveling Salesman Problen

The [Traveling Salesman Problem](https://wikipedia.org/wiki/travelling_salesman_problem) (TSP) needs to find the shortest possible route for a salesman to visit each city exactly one time and returns to the starting point.

It is easily transposable as a [graph](../../data/data-structure/graph.md), where cities are vertices and routes are edges, representing a [hamiltonian path](../../data/data-structure/graph.md#Eulerian%20vs.%20Hamiltonian).

## Complexity

The TSP is categorised as [NP-Complete](../complexity.md#NP): there is currently no algorithm to solve it in polynomial time.

## Improvement

Some [heuristics](../algorithms.md#Terminology) exist to improve found solutions.

- [2-opt](https://en.wikipedia.org/wiki/2-opt): take 2 random edges, swap them and verify if it improves the solution. It's possible to swap more edges (3-opt, 4-opt, etc)
- [Lin-Kernighan](https://en.wikipedia.org/wiki/Lin–Kernighan_heuristic): create a split in the graph and count the number of edges that cross it. Swap 2 edges: if less vertices cross the split, the solution has improved. (Example: [profmadden's video](https://www.youtube.com/watch?v=6cPql7A6JHU))