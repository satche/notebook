---
tags: [machine-learning]
---

# Reinforcement Learning

In [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning), we teach the model to adapt its behaviour by telling it how well it's doing at a certain task. In opposition to [supervised learning](/engineering/machine-learning/learning-paradigms/supervised-learning.md), we don't include correct input our output in the learning process.

## Examples

### Multi-armed bandit

We can illustrate the [multi-armed bandit](https://en.wikipedia.org/wiki/Multi-armed_bandit) problem as following.

Amodel is faced with a series of slot machines (one-armed bandit), each with an unknown probability distribution of rewards. The goal is to maximize cumulative rewards over time by balancing two strategies:

1. **Exploration**: The model tries different slot machines to gather information and estimate their respective reward distributions, aiming to discover which machine offers the highest payoff.
2. **Exploitation**: The model focuses on the slot machine that is currently believed to provide the highest expected reward, based on the information it has gathered so far, in order to maximize its immediate gains.

The challenge is to efficiently balance exploration (learning about the machines) and exploitation (leveraging the best-known machine).