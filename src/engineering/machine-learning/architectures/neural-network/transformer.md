---
aliases: [GPT]
tags: [machine-learning]
---

# Transformer 

[Transformer](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)) are [deep learning](neural-network.md) architectures mainly used for [NLPs](../../application/nlp.md), [LLMs](../../application/nlp.md) and other [generative AI](../../application/generative-ai.md) tasks (e.g. image, sound, etc).

## How does it work

Transformer is based on a *self-attention* mechanism to avoid the need to process the data sequentially. It is composed of the 2 main parts:

- **Encoder**: takes the input and generate a hidden vectorial representation
- **Decoder**: use the hidden representation and generate output sequence

Each layer has:

- **Multi-head attention**: learns to assign weights to token according their relevance
- **Feed-forward**: applies a fully connected neural network to each position in the sequence independently. It ensures that local and global information are both utilized effectively for downstream tasks.

## Autoregression

An [autoregressive model](https://en.wikipedia.org/wiki/Autoregressive_model) will apply [regression](../../tasks/regression.md) (i.e. generate output according to inputs) based on its own previous generated output. 

## Models

### GPT

[Generative pre-trained transformer](https://en.wikipedia.org/wiki/Generative_pre-trained_transformer) (GPT) is a dominant architecture choice for a lot of [LLM](../llm.md). 