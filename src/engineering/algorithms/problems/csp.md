---
tags: [algorithm, algorithm/problem]
---

# Constraint Satisfaction Problem

[Constraint Satisfaction Problem](https://en.wikipedia.org/wiki/Constraint_satisfaction_problem) (CSP)

- Variables: $x_1,x_2,…,x_n$
- Constraints: $c_1, c_2, …, c_n$

Assign value at each variable, making sure constraints are respected.

- Assign a value to a variable
- Then, remove available values for other variable to still respect the constraints
- If a variable has no more value available, we return an error

We use [backtracking](https://en.wikipedia.org/wiki/Backtracking) is a recursive method used in CSP: it gradually finds candidate solutions and abandons candidates (backtracks) when a candidate cannot be a good solution. 

## Heuristics

CSPs can involve high complexity, it often need heuristics to have a reasonable solving time.

## Problems example

- [Sudoku](https://en.wikipedia.org/wiki/Sudoku)
- [Map coloring problem](https://en.wikipedia.org/wiki/Graph_coloring "Graph coloring")
- [Eight queens puzzle](https://en.wikipedia.org/wiki/Eight_queens_puzzle "Eight queens puzzle")
- [Type inference](https://en.wikipedia.org/wiki/Type_inference)
- [Maximum cut problem](https://en.wikipedia.org/wiki/Maximum_cut "Maximum cut")