---
aliases: [Jarnik]
tags: [algorithm, algorithm/greedy, graph]
---

# Prim's algorithm

[Prim's algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm) is a [greedy](../algorithms.md#Terminology) algorithm used to find the [Minimum Spanning Tree](../../data/data-structure/tree.md#Minimum%20Spanning%20Tree) in a graph.

![Animation of Prim's algorithm on a graph](../assets/prim.gif '[Prim's algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm) - Wikipedia')

## Algorithm

1. Initialize the tree: chose the root node, which is a single vertex chosen arbitrarily from the graph.
2. Grow the tree by one edge, by choosing one with the minimum weight (e.g. distance).
3. Repeat step 2, until all vertices are in the tree.

## Resources

- [Prim's algorithm visualization](https://www.cs.usfca.edu/~galles/visualization/Prim.html) – David Galles