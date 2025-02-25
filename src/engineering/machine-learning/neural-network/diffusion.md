---
tags: [machine-learning, machine-learning/neural-network]
---

# Diffusion model

A [diffusion model](https://en.wikipedia.org/wiki/Diffusion_model) is mainly used for [computer vision](/engineering/machine-learning/applications/computer-vision.md) applications, including image (and video) [generation](/engineering/machine-learning/applications/generative-ai.md) tasks.

## How does it works

The model basically add noise to data and try to recreate it from pure noise.

![diffusion](/engineering/machine-learning/assets/diffusion.png)

### Forward process

The model progressively add Gaussian noise to data from the training dataset until it's 100% noise.

### Reverse process

In the reverse process, the model gradually **denoise** the image. This architecture is typically based on U-Net or [Transformers](/engineering/machine-learning/neural-network/transformer.md). 

#### Samplers

The **sampler** determines *how* noise is removed, step by step, producing a new sample at each stage of the generation. It determines the strategy: how random or deterministic the denoising process should be. Each sampler need to find a trade-off between computational speed and output's quality.

**Some examples**:
- *Euler Ancestral*: Adds random noise at each step, increasing diversity in the generated output.
- *DDPM*: A probabilistic model with a slow but stable denoising process.
- *DDIM*: An implicit model that skips some steps to speed up the process.
- *DPM2*: Differential equation solvers that perform intermediate evaluations during the process to adapt.
- *PNDM*: A pseudo-numerical model using statistical approximations to speed up the denoising process.

#### Schedulers

The **scheduler** determine *when* noise is removed through each steps. It defines a denoising curve (e.g. linear, logarithmic, exponential), setting how much noise should be remove at which stage of the denoising process.


## Resources

### Articles

- [Mathematical Foundation of Diffusion Generative Models](https://scholar.harvard.edu/binxuw/classes/machine-learning-scratch/materials/foundation-diffusion-generative-models) – Harvard School
- [Visual introduction to Diffusion models](https://erdem.pl/2023/11/step-by-step-visual-introduction-to-diffusion-models) – Kemal Erdem
- [poloclub.github.io/diffusion-explainer](https://poloclub.github.io/diffusion-explainer/) – Visual explanation on how Stable Diffusion works

### Papers

- [arXiv:2306.04542](https://arxiv.org/abs/2306.04542) – On the Design Fundamentals of Diffusion Models: A Survey
- [arXiv:2209.04747](https://arxiv.org/abs/2209.04747) – Diffusion Models in Vision: A Survey