---
aliases: [Primitives]
tags: [data, data/types]
---

# Data types

We use different kind of data, with different properties (e.g. range of values), to achieve different tasks. For example, adding dates or numbers work differently. That's why we use [data types](https://en.wikipedia.org/wiki/Data_type).

## Primitives

[Primitive data types](https://en.wikipedia.org/wiki/Primitive_data_type) are the basic ones, necessary to built other complex data types. We also refer to them as *built-in types*, since they're built into the programming language.

- [Numeric types](numeric.md) - Integers and float
- [Boolean types](https://en.wikipedia.org/wiki/Boolean_data_type)
- Textual types - Characters and Strings

Keep in mind that primitives are [immutable](../../../code/glossary/immutable.md): you can't change their value. When you declare a variable to a primitive and change it after, you're actually changing the address (reference), not the value itself.(See: [Object copying](../../architecture/paradigms/object-oriented.md#Object%20copying)).

Primitive values are still freed from memory, thanks to garbage collection

<!-- WIP
https://en.wikipedia.org/wiki/List_of_data_structures#Data_types
→ Compositie data structures
→ Garbage collection: https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)
-->