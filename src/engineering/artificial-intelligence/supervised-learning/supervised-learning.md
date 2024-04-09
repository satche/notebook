---
tags: [artificial-intelligence]
---

# Supervised Learning

[Supervised Learning](https://wikipedia.org/wiki/supervised_learning) is a paradigm in [Machine Learning](../artificial-intelligence.md), where we train the computer to predict an output based on the input data. The dataset contains both *features* and *targets*, provided by a human.

## Notation

| Notation | Description |
| ---- | ---- |
| $S$ | **Dataset**. Contains all the features and targets for our predictions |
| $N$ | Total number of samples in the dataset |
| $x$ | **Feature**. Input value(s) from the dataset.<br>Also called: *explicative variables*, or *class* in classification |
| $X$ | Matrix of many features, i.e $X = (x_1, …, x_n)$ |
| $y$ | **Target**. Output values from the dataset.<br> Also called: *ground truth*, *response variables*, or *label* |
| $\hat y$ | **Prediction**. Output calculated/suggested by the model |

### Example

| |Surface ($m^2$)|Number of rooms|Price / month|
|---|---|---|---|
|1|80|2|1500|
|2|90|2|1600|
|3|100|3|1750|
|4|110|3|1900|

Dataset $S$, composed of 4 samples

- Feature $x_1$ → Surface
- Feature $x_2$ → Nbr. of rooms
- Target $y_1$ → Price / month