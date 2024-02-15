---
tags: [algorithm, "algorithm/sort"]
---

# Heapsort

The [heapsort](https://en.wikipedia.org/wiki/Heapsort) is a sorting algorithm using [max-heap](../../data/data-structure/heap/heap.md) data structure. It basically works like this:

1. Divides the input into a sorted and an unsorted region.
2. Takes the largest element from the unsorted region and inserts it into the sorted region.
3. The unsorted region is kept as a heap, which allows finding the largest element quickly.

![Heapsort animated example](../assets/heapsort.gif)

## Complexity

[Time complexity](../complexity.md)
- **Worst-case**: $O(n\log n)$

## Resources

- [Heapsort visualization](https://www.cs.usfca.edu/~galles/visualization/HeapSort.html) – David Galles
- [Heapsort in 4 minutes](https://www.youtube.com/watch?v=2DmK_H7IdTo) – Youtube