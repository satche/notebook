---
tags: [data-structure, data-structure/tree]
---

# Fibonacci Heap

[Fibonacci heap](https://en.wikipedia.org/wiki/Fibonacci_heap) is a [heap](heap.md) [data-structure](../data-structure.md) that mimics the [fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence). It is very interesting to use to find [Minimum Spanning Tree](../tree.md#Minimum%20Spanning%20Tree) and single source [shortest path](../../../algorithms/problems/shortest-path.md), like in [Dijkstra](../../../algorithms/graph/dijkstra.md) algorithm.

As it's somehow complex to implement, it's not very used in practice.

## Pointers

Each node has the following pointers:
- 1 to the parent
- 1 to any one of the children
- 2 to the direct siblings (or itself if it is an only child)
- Degrees, i.e. the number of its direct children
- Mark, i.e. does this node has lost a child 

We also keep track of
- total number of nodes in the heap
- minimum node value in the heap

## Complexity

[Time complexity](../../../algorithms/complexity.md)
- **Insert node**: $\Theta(1)$
- **Find minimum**: $\Theta(1)$
- **Delete minimum**: $O(\log n)$ (amortized)
- **Decrease key**: $\Theta(1)$ (amortized)

Note: *amortized* is the average time over a sequence of operation

## Resources

- [Fibonacci Heaps in 6 minutes - Intro](https://www.youtube.com/watch?v=0vsX3ZQFREM) – Youtube
- [Fibonacci Heaps in 6 minutes - Insert and Union](https://www.youtube.com/watch?v=lJFi5akwsTM) – Youtube
- [Fibonacci Heaps in 6 minutes - Extract min](https://www.youtube.com/watch?v=OF8yv18xS3I) – Youtube
- [Fibonacci Heaps in 6 minutes - Decreases key](https://www.youtube.com/watch?v=z_3wye57yxs) – Youtube