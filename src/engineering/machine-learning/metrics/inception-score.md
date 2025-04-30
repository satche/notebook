---
tags: [machine-learning]
---

# Inception Score

[Inception Score](https://en.wikipedia.org/wiki/Inception_score) (IS) assess the quality of a [generated](/engineering/machine-learning/applications/generative-ai.md) image based on 2 criteras:

- **Realism**: how well the cat resemble of real-life cats
- **Diversity**: how many different cats the model can output (position, color, etc).

**Some infos**
- IS is based on an Inception [CNN](/engineering/machine-learning/neural-network/cnn.md) image [classification](/engineering/machine-learning/tasks/classification.md) model
- In contrast with [FID](/engineering/machine-learning/metrics/fid.md), IS doesn't compare generated image with a dataset
- The score is more relevant for recognizable non-abstract images
- It is basically not very recommended because of its limitations

## Resources

### Papers

- [arxiv:1801.01973](https://arxiv.org/abs/1801.01973) – A Note on the Inception Score