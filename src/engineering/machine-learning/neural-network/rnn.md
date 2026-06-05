---
aliases: [RNN]
tags: [machine-learning, machine-learning/neural-network]
---

# Recurrent Neural Network

A [Recurrent Neural Network](https://en.wikipedia.org/wiki/Recurrent_neural_network) (RNN) are mainly used to process sequential data (text, speech, time series, …), where order of element is important. It has a *backpropagation* mechanism to feed the results back to the network.

RNNs have a better capacity to retain information over a sequence, Compared to [CNNs](/engineering/machine-learning/neural-network/cnn.md) which doesn't have explicit memory. It's also harder to parallelize, since each step of the sequence need to be computed before the next one.