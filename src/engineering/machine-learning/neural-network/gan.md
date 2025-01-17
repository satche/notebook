---
aliases: [GAN]
tags: [machine-learning, machine-learning/neural-network]
---

# Generative Adversarial Network 

![gan](/engineering/machine-learning/assets/gan.jpg)

In a [Generative Adversarial Network](https://en.wikipedia.org/wiki/Generative_adversarial_network) (GAN), 2 neural networks compete with each other.

The [generator](https://en.wikipedia.org/wiki/Generative_model) will attempt to create a synthetic output (e.g. an image) from random noise. The [discriminator](https://en.wikipedia.org/wiki/Discriminative_model) compare the result with a real dataset (usually [unsupervised](/engineering/machine-learning/learning-paradigms/unsupervised-learning.md)) and try to determine the fake result.

Backpropagation process apply on both models so they can improve: the generator create better samples, the discriminator become better at finding them.

## Variants

Here some prominent GAN variants:

- **DCGAN (Deep Convolutional GAN):** Uses convolutional layers for better image generation.
- **WGAN (Wasserstein GAN):** Improves training stability with a different loss function.
- **CycleGAN:** Translates images between different domains (e.g., horse to zebra).
- **StyleGAN:** Known for generating high-quality, photorealistic faces.
- **BigGAN:** Scales up GANs for generating high-resolution images.

## Resources

- [Generative adversarial networks explained](https://developer.ibm.com/articles/generative-adversarial-networks-explained/)