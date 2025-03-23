---
aliases: [Jarnik]
tags: [algorithm, algorithm/greedy, data-structure/graph]
---

# Prim's algorithm

[Prim's algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm) is a [greedy](../algorithms.md#Terminology) algorithm used to find the [Minimum Spanning Tree](../../data/data-structure/tree.md#Minimum%20Spanning%20Tree) in a graph.

It works well for dense graphs.

![Animation of Prim's algorithm on a graph](/images/prim.gif '[Prim's algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm) - Wikipedia')

## Algorithm

1. Initialize the tree: chose the root node, which is a single vertex chosen arbitrarily from the graph.
2. Grow the tree by one edge, by choosing one with the minimum weight (e.g. distance).
3. Repeat step 2, until all vertices are in the tree.

## Complexity

Prim algorithm [complexity](../complexity.md) can change depending of the data structure used.

| Operation | Array | List | [Tree](../../data/data-structure/tree.md) | [Heap](../../data/data-structure/heap/heap.md) | [Fibonacci heap](../../data/data-structure/heap/fibonacci-heap.md) |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Insert | $O(1)$ | $O(1)$ | $O(\log n)$ | $O(\log n)$ | $O(1)$ |
| Access minimum | $O(n)$ | $O(n)$ | $O(\log n)$ | $O(1)$ | $O(1)$ |
| Delete minimum | $O(n)$ | $O(n)$ | $O(\log n)$ | $O(\log n)$ | $O(\log n)$ (amorti) |
| Decreases key | $O(1)$ | $O(1)$ | $O(\log n)$ | $O(\log n)$ | $O(1)$ (amorti) |

## Resources

- [Prim's algorithm visualization](https://www.cs.usfca.edu/~galles/visualization/Prim.html) – David Galles