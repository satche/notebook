# Machine Learning

[Machine Learning](https://wikipedia.org/wiki/machine_learning) is a field of study that gives computers the ability to learn without being explicitly programmed.

## Notation

| Notation | Description |
| ---- | ---- |
| $S$ | **Dataset**. Contains all the features and targets for our predictions |
| $N$ | Total number of samples in the dataset |
| $x$ | **Feature**. Input value(s) from the dataset.<br>Also called: *explicative variables*, or *class* in classification |
| $X$ | Matrix of many features, i.e $X = (x_1, …, x_n)$ |
| $y$ | **Target**. Output values from the dataset.<br> Also called: *ground truth*, *response variables*, or *label* |
| $\hat y$ | **Prediction**. Output calculated/suggested by the model |

### Example

| |Surface ($m^2$)|Number of rooms|Price / month|
|---|---|---|---|
|1|80|2|1500|
|2|90|2|1600|
|3|100|3|1750|
|4|110|3|1900|

Dataset $S$, composed of 4 samples

- Feature $x_1$ → Surface
- Feature $x_2$ → Nbr. of rooms
- Target $y_1$ → Price / month

## Resources

### Glossary

- *MLM* – Machine Learning Model
- *ML Facilities* – Resources used to train a model
- *ML Inference* – Using a trained model on data

### Tools

- [playground.tensorflow.org](https://playground.tensorflow.org) – Neural Network visualization
- [projector.tensorflow.org](https://projector.tensorflow.org) – Word2Vec Embedding visualization
- [microscope.openai.com](https://microscope.openai.com) – Vision models visualization
- [bbycroft.net/llm](https://bbycroft.net/llm) – LLM models visualization

### Learn

- [developers.google.com/machine-learning](https://developers.google.com/machine-learning) – ML Formation by Google
- [ml-cheatsheet.readthedocs.io](https://ml-cheatsheet.readthedocs.io)– A good cheatsheet on core concept in ML
- [neuralnetworksanddeeplearning.com](https://neuralnetworksanddeeplearning.com) – Free online book, by [Michael Nielsen](http://michaelnielsen.org)
- [ig.ft.com/generative-ai](https://ig.ft.com/generative-ai/) – Illustrated overview on how LLM work

## WIP

- Clustering
	- K-mean
	- DBSCAN
- Classification
	- Support Vector Machine (SVM)
	- Bayesian classifier
- AlphaFold
	- AlphaFold 2 (Nov 2020) predicts the 3D structure of a protein from an amino acid sequence using reinforcement learning. DeepMind developed this solution in four years, by adapting AlphaGo, the algorithm that defeated the best human player of Go in 2016
	- DeepMind has published about 200 million protein 3D structure predictions since then. Before that, there were about 100’000 known 3D structures as the result of 50 years of research