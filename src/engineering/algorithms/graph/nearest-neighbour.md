---
tags: [algorithm, algorithm/greedy, data-structure/graph]
---

# Nearest neighbour

[Nearest neighbour](https://en.wikipedia.org/wiki/Nearest_neighbour_algorithm) is a [greedy](../algorithms.md#Terminology) algorithm initially to find the shortest path among a [graph](../../data/data-structure/graph.md). It is typically used to solve problems like [Traveling Salesman](../problems/traveling-salesman.md).

It basically works like [Prim](prim.md)'s algorithm, but the next nearest vertice needs to be connected to the last one.

## Complexity

[Time complexity](../complexity.md)
- **Worst case**: $O(n^2)$
- **Best case**: $\Omega(n^2)$ 