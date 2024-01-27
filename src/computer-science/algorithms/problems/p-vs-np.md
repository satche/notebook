---
tags: [algorithm, "algorithm/problem"]
---

# P vs. NP problem

The [P vs. NP problem](https://en.wikipedia.org/wiki/P_versus_NP_problem) asks is it's possible to finding a solution to a problem as quickly it is to verify it. *P* and *NP* refers to the [complexity classes](../complexity.md#Complexity%20classes) of these problems.

P vs. NP is one of the seven [Millennium Prize Problems](index.md#Millennium%20Prize%20Problems).

**The question**
Does every problem that can be quickly checked (NP) can also be quickly solved (P) ?
If you can efficiently *verify* an answer, can you also efficiently *find* the answer in the first place?

**The answer**
We don't know the answer yet. There is 2 possible scenarios.

$P=NP$
It means that all problems for which we can check solutions in polynomial time can also be solved with the same time complexity.

$P ≠ NP$
It means there are problems where checking solutions require polynomial time, but finding solutions is inherently more complex.