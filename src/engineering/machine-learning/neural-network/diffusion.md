---
tags: [machine-learning, machine-learning/neural-network]
---

# Diffusion model

A [Diffusion model](https://en.wikipedia.org/wiki/Diffusion_model) is mainly used for [Computer Vision](/engineering/machine-learning/applications/computer-vision.md) applications, including image (and video) [generation](/engineering/machine-learning/applications/generative-ai.md) tasks.

## How does it works

The model basically add noise to data and try to recreate it from pure noise.

![diffusion](/engineering/machine-learning/assets/diffusion.png)

### Forward process

The model progressively add Gaussian noise to data from the training dataset

### Reverse process

The model gradually denoise the image. This architecture is typically based on U-Net or [Transformers](/engineering/machine-learning/neural-network/transformer.md).

## Resources

### Articles

- [Mathematical Foundation of Diffusion Generative Models](https://scholar.harvard.edu/binxuw/classes/machine-learning-scratch/materials/foundation-diffusion-generative-models) – Harvard School
- [Visual introduction to Diffusion models](https://erdem.pl/2023/11/step-by-step-visual-introduction-to-diffusion-models) – Kemal Erdem
- [poloclub.github.io/diffusion-explainer](https://poloclub.github.io/diffusion-explainer/) – Visual explanation on how Stable Diffusion works

### Papers

- [arXiv:2306.04542](https://arxiv.org/abs/2306.04542) – On the Design Fundamentals of Diffusion Models: A Survey
- [arXiv:2209.04747](https://arxiv.org/abs/2209.04747) – Diffusion Models in Vision: A Survey