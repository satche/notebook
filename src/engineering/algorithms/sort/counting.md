---
tags: [algorithm/sort, algorithm]
---

# Counting sort

[Counting sort](https://en.wikipedia.org/wiki/Counting_sort) is used to [sort](sort.md) small range of [integers](../../data/types/numeric.md). It basically works like this:

1. Determine the *range* of input numbers
2. *Count* the numbers in an array, where index is the number and value is the repetition
3. *Accumulate* the array to show position where each number should go
4. *Place* numbers: accumulate values show the index

## Example

```
   input:      [4,2,2,8,3,3,1]
1. range:      1-8
2. count:      [0,1,2,2,1,0,0,0,1]
3. accumulate: [0,1,3,5,6,6,6,6,7]
4. place:      [1,2,2,3,3,4,8]
```

## Complexity

[Time complexity](../complexity.md)
- **Worst-case**: $O(n+k)$ → where $k$ is the range