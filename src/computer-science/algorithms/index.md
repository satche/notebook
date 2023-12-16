# Algorithms

## Terminology

- [Heuristic](https://wikipedia.org/wiki/heuristic_(computer_science)): give a quick solution but usually not optimal
- [Greedy algorithm](https://wikipedia.org/wiki/greedy_algorithm): select the best result at each iteration, so the global optimum is obtained by repeatedly selecting the local optimum
	- Examples: Kruskal, Prim, Djikstra

## Common problems

- [Traveling salesman problem](https://wikipedia.org/wiki/travelling_salesman_problem) – Wikipedia
- [Busy beaver](https://wikipedia.org/wiki/busy_beaver) – Wikipedia
- [Steiner Tree Problem](https://wikipedia.org/wiki/steiner_tree_problem) – Wikipedia
- [P vs. NP](https://wikipedia.org/wiki/p_versus_np_problem) – Wikipedia

## Complexity

The [Big O](https://wikipedia.org/wiki/big_o_notation) notation shows how a function's performance and [complexity](https://wikipedia.org/wiki/time_complexity) get bigger as the size of its input increases.

| Notation     | Name                                                                                | Example                             |
| ------------ | ----------------------------------------------------------------------------------- | ----------------------------------- |
| $O(1)$       | [constant](https://wikipedia.org/wiki/constant_time)                             | Determine if number is even or odd  |
| $O(\log n)$  | [logarithmic](https://wikipedia.org/wiki/logarithmic_time "logarithmic time")    | [binary-search](search/binary-search.md) |
| $O(n)$       | [linear](https://wikipedia.org/wiki/linear_time "linear time")                   | Find item in an unsorted list/array |
| $O(n\log n)$ | [linearithmic](https://wikipedia.org/wiki/linearithmic_time "linearithmic time") | (to complete)                       |
| $O(n^2)$     | [quadratic](https://wikipedia.org/wiki/quadratic_time "quadratic time")          | (to complete)                       |
| $O(n^c)$     | [polynomial](https://wikipedia.org/wiki/polynomial_time "polynomial time")       | (to complete)                       |
| $O(n!)$      | [factorial](https://wikipedia.org/wiki/factorial "factorial")                    | (to complete)                       |

![Graph on different complexity: number of operations N versus input size n for each function](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/comparison_computational_complexity.svg/440px-comparison_computational_complexity.svg.png)

Algorithms usually have best/worst case scenario, depending of which input number is given (e.g., if we randomly find the result on the first try).

### Flow

- Permutation Flow Shop: product chain with operation sequence fixed
	- https://wikipedia.org/wiki/Flow-shop_scheduling
- Job Shop: product chain with operation sequence variable
	- https://wikipedia.org/wiki/Job_shop

## Resources

- [List of algorithms](https://wikipedia.org/wiki/list_of_algorithms) – Wikipedia
- [Algorithm and data structure visualization](https://www.cs.usfca.edu/~galles/visualization/algorithms.html) – David Galles


