---
tags: [algorithm, algorithm/metaheuristic]
---

# Simulated annealing

[Simulated annealing](https://wikipedia.org/wiki/simulated_annealing) aims to find the global minimum/maximum value by occasionally accepting solutions that are worse than the previous one. This approach helps to avoid getting stuck in a local minimum/maximum solution.

A temperature parameter is set, which determines the probability of accepting a worse solution. This probability decreases over time: as the iterations progress, it becomes less likely to accept inferior solutions.

![Animated example of simulated annealing](../assets/simulated-annealing.gif)