---
tags: [algorithm, "algorithm/problem"]
---

# Steiner tree problem

[Steiner tree problem](https://en.wikipedia.org/wiki/Steiner_tree_problem) can be see to the mix between a [Minimum Spanning Tree](../../data/data-structure/tree.md#Minimum%20Spanning%20Tree) problem and a [shortest path](shortest-path.md) problem. It tries to find the shortest network between the vertices of a [graph](../../data/database/nosql/graph.md).

The problem can be illustrated by building the less roads possible to connect cities together.

Sometimes, we can add the option to add vertices (i.e. *Steiner nodes*) to the graph to decrease the total length of the graph.

It is considered as a [NP-hard](../complexity.md#NP) problem.