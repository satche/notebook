---
aliases: [Curse of dimensionality, Dimensionality reduction]
tags: [machine-learning]
---

# Dimensions

Computers can only work with numerical data, and the same is true for machine learning models. [Features](/engineering/machine-learning/concepts/features.md) need to be represented into [tensors](/engineering/maths/algebra/tensor/tensor.md) and mapped into high-dimensional space for processing.

For example, a 28x28 grayscale image will be flatten into a single [matrix](/engineering/maths/algebra/tensor/matrix.md) of $28\times28=784$ dimensions, which contains where each value represents a pixel's intensity, from pure black (0) to pure white (255).

```python
[[  0 128 255 …  87  92  14]
 [ 24  58 119 … 160  92  77]
 [210  45 200 …  56 183 134]
 …
 [120  92 250 …  34 101  23]
 [255  35  76 …  12 141  67]
 [ 23 145 176 …  87  59 204]]
```

A colored image would typically need a third dimension to include 3 values pro pixel (i.e. one for each RGB canal).

```python
[[[  0 128 255] [ 24  58 119] [210  45 200] ...]
 [[160  92  77] [ 92  77 130] [ 56 183 134] ...]
 [255  35  76](255%20%2035%20%2076)
```

## Manifold hypothesis

The [Manifold hypothesis](https://en.wikipedia.org/wiki/Manifold_hypothesis) suggests that, within a high-dimensional space, data tends to lie on a lower-dimensional *manifold* (a curved surface) that is sufficient to capture patterns and relationships.

For example, in a 28x28 image of a letter, not all 784 dimensions are necessary to recognize the character. Despite variations, like handwriting styles or cases, a smaller number of dimensions are typically enough to capture the essential features and understand the underlying pattern.

## Curse of dimensionality

The [curse of dimensionality](https://en.wikipedia.org/wiki/Curse_of_dimensionality) refers to the challenges high-dimensional spaces create for data analysis, such as sparsity and issues like overfitting.

## Dimensionality reduction

[Dimensionality reduction](https://en.wikipedia.org/wiki/Dimensionality_reduction) is the process of reducing the number of **dimensions** (i.e. features, variables) in a dataset while trying to preserve as much important information as possible.

## Techniques

- [Principal Component Analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) (PCA)