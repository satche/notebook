---
tags: [machine-learning, machine-learning/neural-network]
---

# CLIP

[Contrastive Language-Image Pre-training](https://en.wikipedia.org/wiki/Contrastive_Language-Image_Pre-training) (CLIP) is a [self-supervised](/engineering/machine-learning/learning-paradigms/self-supervised.md) model with two [neural networks](/engineering/machine-learning/neural-network/neural-network.md): one for text encoding ([Transformer](/engineering/machine-learning/neural-network/transformer.md)) and one for image encoding ([ViT](/engineering/machine-learning/neural-network/vision-transformer.md)). Both are embedded in the same latent space to find which images are correlated with which textual content.

The model associate the strength of the correlation between the text and the image.

## Resources

- [How AI 'Understands' Images (CLIP)](https://www.youtube.com/watch?v=KcSXcpluDe4) – Computerphile, Youtube
- [arXiv:2103.00020](https://arxiv.org/abs/2103.00020) – Learning Transferable Visual Models From Natural Language Supervision