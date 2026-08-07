---
aliases: [Artificial Intelligence]
tags: [machine-learning]
---

# Machine Learning

[Machine Learning](https://en.wikipedia.org/wiki/Machine_learning) is the ability of a program or machine to think and learn by itself.

## Definitions

### Artificial Intelligence

Machine Learning is used as a synonym of [Artificial Intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence), but it is actually a subset of the latter. AI define a broader scope, where systems can simulate human intelligence without relaying on Machine Learning (e.g. chat agents, video game bots, …).

The definition of AI is so large that we tend to classify it into sub-categories

| Term                                                                                                                      | Acronym | Application                                                             |
| ------------------------------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------- |
| [Narrow AI](https://en.wikipedia.org/wiki/Weak_artificial_intelligence)                                                   | -       | Limited to specific tasks (e.g. translation, facial recognition, etc.). |
| [Artificial General Intelligence](https://en.wikipedia.org/wiki/Artificial_general_intelligence)                          | AGI     | Applied to any problems, matching human cognitive capabilities          |
| [Artificial superintelligence](https://en.wikipedia.org/wiki/Artificial_superintelligence "Artificial superintelligence") | ASI     | Cognitive applications superior to human being                          |
**Related**:
- [arcprize.org](https://arcprize.org/) – Abstraction and Reasoning Corpus for Artificial General Intelligence (ARC-AGI)

### Deep learning

[Deep learning](https://en.wikipedia.org/wiki/Deep_learning) is a subset of machine learning focused on the use of [neural network](neural-network/neural-network.md). 

### Key events

- **1949**: Alan Turing already created the [Turing test](https://en.wikipedia.org/wiki/Turing_test) to evaluate a system's intelligence by having a user interact with it. If the user believes they are communicating with a human, the system passes the test.
- **1955**: [Logic Theorist](https://en.wikipedia.org/wiki/Logic_Theorist) is consider the first AI program, build to perform automated reasoning.
- **2016**: [AlphaGo](https://en.wikipedia.org/wiki/AlphaGo) defeat the best human player of Go in 2016
- **2018**: [AlphaFold](https://en.wikipedia.org/wiki/AlphaFold) is a model that can predict the 3D structure of a protein from an amino acid sequence using reinforcement learning. In 4 years, it has published about 200 million proteins 3D structure predictions vs. 100’000 after 50 years of research using traditional methods.

## Related topics

- The [ELIZA effect](https://en.wikipedia.org/wiki/ELIZA_effect) describe how people tend to attribute human traits to intelligent systems that have a textual interface (typically with [LLMs](neural-network/llm.md)). Because of that, users empathise with AI system, from being polite to building friendship with.
- The [dead Internet theory](https://en.wikipedia.org/wiki/Dead_Internet_theory) is a conspiracy theory that state that the web (social media in particular) mainly consist of bots 

## Resources

### Glossary

- *MLM* – Machine Learning Model
- *ML Facilities* – Resources used to train a model
- *ML Inference* – Using a trained model on data
- [AI Glossary](https://www.nngroup.com/articles/artificial-intelligence-glossary/) – NNGroup

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
- [physicsbaseddeeplearning.org](https://physicsbaseddeeplearning.org) – Book about physical simulations in Deep Learning
- [interdb.jp/dl](https://www.interdb.jp/dl/) – The Engineer’s Guide To Deep Learning by Hironobu Suzuki
- [paperswithcode.com](https://paperswithcode.com/) – Machine Learning papers with code and datasets
- [github.com/robert/hello-deep-learning](https://github.com/robert/hello-deep-learning) – Basic deep learning exercices


<!-- TODO

# **Learning Paradigms and Approaches**

- Supervised Learning
- Unsupervised Learning
- Reinforcement Learning
- Semi-Supervised Learning
- Self-Supervised Learning

# **Prediction and Analysis Tasks**

- Classification
	- Support Vector Machine (SVM)
	- Bayesian classifier
- Regression
- Forecasting (e.g., time-series analysis)
- Anomaly Detection
- Clustering
	- K-mean
	- DBSCAN

# **Model Types and Architectures**

- Decision Trees
- Random Forests
- Support Vector Machines (SVMs)
- Neural Networks (general concept)

# **Deep Learning Techniques**

- Convolutional Neural Networks (CNNs)
- Recurrent Neural Networks (RNNs)
- Transformers (e.g., BERT, GPT)
- Autoencoders
- Generative Models (e.g., VAEs)
- Transfer Learning

# **AI Applications**

- Natural Language Processing (NLP)
- Robotic Process Automation (RPA)
- Computer Vision
- Speech Recognition
- Recommender Systems

# **Optimization and Evaluation**

- Gradient Descent
- Hyperparameter Tuning
- Model Evaluation Metrics (e.g., accuracy, precision, recall)

# Political & Ecological

## Water consumption

**Energy repartition (estimations)**
- 65-75% for power generation: water used in the power plant to generate the electricity
- 20-25% for water cooling: evaporation use to cool data centers
- 5-10% for chip manufacturing: creation of GPU to train and use the model

The construction of the data center itself is not included. Should it be included in the data center sector, or fall under the construction industry?

**Water cooling**
- Water evaporation: energy efficienty, bus require more water
- Air-cooling: use less water, but more energy (so water is consumed at power plants to generate more electricity)
- Closed-loop: water circulate internally instead of evaporating

**Consumption comparison**
- LLM text query: ~0.3 mL (~0.25-3 Wh)
- Music streaming (1h): ~250 mL
- Social Media (1h): ~430 mL
- Visioconference (1h): ~1720 mL
- Video streaming (1h): ~2000-15000 mL (depending of the monitor, video, etc) 

**Thoughts and discussion**
- Yes, data center require large amount of water, but other similar sector too - and it doesn't really raised awarness like it does with AI
- Water consumption for data center are relatively low compared to other industrial sectors. But the usage is probably less important compared to agriculture, transport or textile.

-->