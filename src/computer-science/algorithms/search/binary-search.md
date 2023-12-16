---
aliases: []
tags: []
---

# Binary search

The [binary search](https://wikipedia.org/wiki/binary_search) is used to find a value by splitting the interval into two at each iteration.

We can find the final result if it's a discret interval, like an index in a sorted list. However, if it's a continuous, we need to give a stopping condition (precision).
![Binary search representation](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/binary_search_into_array_-_example.svg/400px-binary_search_into_array_-_example.svg.png)

## Algorithm

```python
while (b - a) > ε
	m = (a + b) / 2
	if (f(a) * f(m) ≤ 0)
		b = m
	else
		a = m
```
`ε` is the precision, `m` is the middle point, `a` and `b` define the interval.

## Complexity

- Best case: $O(1)$
- Worst case: $O(\log n)$
- Average: $O(\log n)$