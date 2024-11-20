---
aliases: [Large Language Model, LLM]
tags: [machine-learning]
---

# Natural Language Processing

[Natural Language Processing](https://en.wikipedia.org/wiki/Natural_language_processing) (NLP) is a field in [Machine Learning](../machine-learning.md) giving computers the ability to support and manipulate human language.

## Retrieval-augmented generation

[Retrieval-augmented generation](https://en.wikipedia.org/wiki/Prompt_engineering#Retrieval-augmented_generation) (RAG) is the process to include personal data in a prompt. It's especially useful to output personalised answers to a user's request, where a LLM response would be to generic.

**Process**
- The user enter a prompt (e.g. "Do you have a parking lot")
- The prompt is enhance with preliminary instructions (e.g. "Act as a customer service assistant")
- A search is made in a vector database to *retrieve* relevant textual data (i.e. documents, paragraphs, etc.) based on the user's prompt.
- Top results are used to enhance the user's request
- The whole final *augmented* request is send to a LLM
- The LLM provide a relevant and personalised response to the user