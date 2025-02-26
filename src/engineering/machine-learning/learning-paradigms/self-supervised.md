---
tags: [machine-learning]
---

# Self-supervised Learning

In [self-supervised learning](https://en.wikipedia.org/wiki/Self-supervised_learning) (SSL), a model extracts labels (supervisory signals) from the data, by using metadata, correlations, domain knowledge, etc. The model can typically change/hide part of the data to create a predictive task.

This paradigm is interesting when labeled data is rare or expensive.

## Contrastive learning

In some self-supervised models, like [CLIP](/engineering/machine-learning/neural-network/CLIP.md), a sample is compared with two other samples: one is a enhanced/close-related version of the original sample (positive), and the other is an unrelated sample (negative). The model is trained to associate positives close-by and separate the negatives.

For example, an image of a cat is used, compared with the same altered-version (e.g. crop, rotation, color) vs. an unrelated one (e.g. image of a dog).