---
tags: [algorithm, "data-structure/tree"]
---

# Beam search

 [Beam search](https://en.wikipedia.org/wiki/Beam_search) is a [heuristic](../algorithms.md#Terminology) algorithm applied on a tree. It's very similar to breadth-first search, but it keeps $p$ best candidates at each $k$ level of the tree.

We can define parameters like:
- How many candidates we keep
- How deep we go below the tree's levels

## Complexity

Beam search's time [complexity](../complexity.md) is $O(k\times p \times n²)$