---
tags: [algorithm, data-structure/graph, algorithm/problem]
---

# Shortest path problem

The [shortest path problem](https://en.wikipedia.org/wiki/Shortest_path_problem) try to find a path in a [graph](../../data/database/nosql/graph.md) cover the less distance. For that, the weights of the chosen edges should be as small as possible.

If you need to pass by all the vertices, it becomes a [Traveling Salesman problem](traveling-salesman.md).

## Algorithms

 - A* search algorithm use heuristics to try to speed up the search.
- [Bellman-Ford](../graph/bellman-ford.md) algorithm can find a path even with negative edges.
- [Dijkstra algorithm](../graph/dijkstra.md) finds a single path, but the edges should have non-negative weights.
- [Floyd-Warshall](../graph/floyd-warshall.md) algorithm solves all pairs shortest paths.
