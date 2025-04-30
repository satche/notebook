---
tags: [machine-learning]
---

# Fréchet Inception Distance

[Fréchet Inception Distance](https://en.wikipedia.org/wiki/Fr%C3%A9chet_inception_distance) (FID) measure the quality of an [AI-generated](/engineering/machine-learning/applications/generative-ai.md) image. It compares a set of real images from the dataset and the generated images. As 2024, it's a standard metric in this domain.

**[Inception Score](/engineering/machine-learning/metrics/inception-score.md)** comparison:
- Both are based on an Inception [CNN](/engineering/machine-learning/neural-network/cnn.md) image [classification](/engineering/machine-learning/tasks/classification.md) model
- FID need a dataset to compare the distribution with generated images
- Low FID score = outputs are more diverse
- High Inception score = high-quality individual images.