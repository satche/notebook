---
aliases: []
tags: [algorithm, algorithm/greedy, data-structure/graph]
---

# Kruskal's algorithm

[Kruskal's algorithm](https://wikipedia.org/wiki/kruskal%27s_algorithm) is a [greedy](../algorithms.md#Terminology) algorithm that tries to find a [Minimum Spanning Tree](../../data/data-structure/tree.md#Minimum%20Spanning%20Tree) among a [graph](../../data/data-structure/graph.md). To achieve this, he use a minimal spanning forest first and connect the trees together.

It works well for less dense graph.

![Animation of Kruskal's algorithm](../assets/kruskal.gif '[Kruskal's algorithm](https://wikipedia.org/wiki/kruskal%27s_algorithm) - Wikipedia')

Its behaviour is similar to [Prim's algorithm](prim.md), but it uses multiple trees before connecting them together.

## Algorithm

- Create a forest (a set of trees) initially consisting of a separate single-vertex tree for each vertex in the input graph.
- Sort the graph edges by weight.
- Loop through the edges of the graph, in ascending sorted order by their weight. For each edge:
    - Test whether adding the edge to the current forest would create a cycle
    - If not, add the edge to the forest, combining two trees into a single tree

## Complexity

- **Worst-case**: $O(|E| \log |V|)$

## Resources

- [Kruskal's algorithm visualization](https://www.cs.usfca.edu/~galles/visualization/Kruskal.html) - David Galles