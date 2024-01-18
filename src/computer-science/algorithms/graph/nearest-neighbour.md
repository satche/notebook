---
tags: [algorithm, algorithm/greedy, graph]
---

# Nearest neighbour

[Nearest neighbour](https://en.wikipedia.org/wiki/Nearest_neighbour_algorithm) is a [greedy](../algorithms.md#Terminology) algorithm initially to find the shortest path among a [graph](../../data/data-structure/graph.md). It is typically used to solve problems like [Traveling Salesman](../problems/traveling-salesman.md).

It basically works like this:

1. Select an arbitrary vertex, set it as the current vertex $u$. Mark $v$ as visited.
2. Find out the shortest edge connecting the current vertex $u$ and an unvisited vertex $v$.
3. Set $v$ as the current vertex $u$. Mark $v$ as visited.
4. If all the vertices in the domain are visited, then terminate.
5. Else, go to step 3.

**[Complexity](../complexity.md)**: $O(n^2)$