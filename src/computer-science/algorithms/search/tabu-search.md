---
tags: [algorithm, algorithm/metaheuristic]
---

# Tabu search

 [Tabu search](https://en.wikipedia.org/wiki/Tabu_search) is a [metaheuristic](../algorithms.md#Terminology) to avoid getting stuck in local optimum during a neighborhood search.

For example, if you use the basic rule of the "first improvement" among the neighbours, there is chances you're missing potential good solutions that need to go through a temporary none-improving path.

Tabu search impose one or many rules to prohibit movements and relax the basic rule.
- Maximum iterations (stopping criteria)
- No inverse movements
- Avoid doing $x$ time the same movement
- Force movement that never occurs
- …, etc.

## Problems

- [Knapsack](../problems/knapsack.md)