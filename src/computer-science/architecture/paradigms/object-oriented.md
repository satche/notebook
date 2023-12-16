---
aliases: [OOP, Object-Oriented Programming]
tags: [architecture]
---

# Object-oriented

[Object-oriented programming (OOP)](https://wikipedia.org/wiki/object-oriented_programming) represents data and methods by representing them with objects which communicate between them. It is [component-based](../styles/component-based.md).

## Relations

| Name        | Explanations                                       | Example                |
| ----------- | -------------------------------------------------- | ---------------------- |
| Association | Two classes are associated                         | `Cat` eats `Food`          |
| Inheritance | A class is a sub-part of another class           | `Cat` is an `Animal`       |
| Aggregation | A class is a *dependent* piece of another class    | `Tail` is part of `Cat`    |
| Composition | A class is an *independent* piece of another class | `Cat` is part of a `House` |
| Realization | A class inherit from an interface                  | `Cat` do `AnimalActions`   |

Read more: [Relationships in Class diagrams](../models/uml/structural-diagrams/class-diagram.md#relationship)

## WIP

- [Singleton pattern](https://wikipedia.org/wiki/singleton_pattern)