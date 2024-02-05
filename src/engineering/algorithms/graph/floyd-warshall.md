---
tags: [algorithm, data-structure/graph]
---

# Floyd-Warshall algorithm

[Floyd-Warshall algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm) try to find the [shortest path](../problems/shortest-path.md) among all the vertices from a [graph](../../data/database/nosql/graph.md), with positive or negative weighted edges. It's best suited for denses graphs.

Another way to illustrate it is to run the [Dijkstra](dijkstra.md) algorithm for all the vertices in the graph.

## Complexity

[Time complexity](../complexity.md)
- **Worst-case**: $O(|V|^3)$
- **Best-case:** $\Omega(|V|^3)$
- **Average-case**: $\Theta(|V|^3)$

Space complexity
- **Worst-case**: $O(|V|)^2$

Note: if you repeat $|V|$ time the [Dijkstra](dijkstra.md) algorithm instead, the complexity become $O(|V|^2 \log |V|+|V||E|)$. It's better, but it works only with positive weighted edges.

## Resources

- [Floyd-Warshall in 4 min.](https://www.youtube.com/watch?v=4OQeCuLYj-4) – Youtube