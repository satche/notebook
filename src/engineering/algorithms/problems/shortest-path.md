---
aliases: [Pathfinding]
tags: [algorithm, algorithm/problem, data-structure/graph]
---

# Shortest path problem

The [shortest path problem](https://en.wikipedia.org/wiki/Shortest_path_problem) try to find a path in a [graph](../../data/database/nosql/graph.md) that cover the less distance. For that, the weights of the chosen edges should be as small as possible.

- If you need to pass by all the vertices, it becomes a [Traveling Salesman problem](traveling-salesman.md).
- If all the vertices have the same weight, a searching algorithm is probably enough

## Problems

- If a graph is very dense (e.g. a map of a city), finding the shortest path can be very long if we have to look for every possibilities

## Algorithms

- [A*](../graph/a-star.md) search algorithm use heuristics to try to speed up the search.
- [Bellman-Ford](../graph/bellman-ford.md) algorithm can find a path even with negative edges.
- [Dijkstra algorithm](../graph/dijkstra/dijkstra.md) finds a single path, but the edges should have non-negative weights.
- [Floyd-Warshall](../graph/floyd-warshall.md) algorithm solves all pairs shortest paths.

## Examples

### Maps

Geographical maps are good examples of pathfinding problems. They need to take more criteras into consideration than just the shortest path; like traffic and speed limitations.

**Pre-processing**
A solution is to pre-process the shortest path between the nodes. The speed would be very fast, as it's just query time dependent. But if the map is dense, it would take too much data. It also can't take dynamic change into consideration, like traffic

**Algorithms**
[A*](../graph/a-star.md) will search in the general direction of the target. While it can find the *shortest* path, it will sometimes missing *faster* path. A bi-directional [Dijkstra](../graph/dijkstra/dijkstra.md) is more complete: the algorithm is run from the departure *and* from the destination, until they find each other in the middle.

**Road hierarchy**
The algorithm can exploit the road hierarchy. It searches for local roads network until finding a *superior* road (e.g. national road or highway), then apply the search again while ignoring the local roads.

Since the algorithm is run from departure to destination, they should connect in the middle via a high-hierarchy road. But this ignore potential faster paths that exploit local roads and don't take traffic into consideration.

**Nested Dissection**
Nested Dissection split the maps in areas, seperated by important bottleneck nodes; like bridges to cross a river, or tunnels to cross mountains.