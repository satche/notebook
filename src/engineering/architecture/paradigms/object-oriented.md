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

## Object copying

There is different ways to [copy an object](https://en.wikipedia.org/wiki/Object_copying) in OOP.

### Reference copy

The object's address (reference) is copied rather than the value. 

```python
a = [1,2,3]
b = a
b.append(4) 

print(a) # [1,2,3,4]
print(b) # [1,2,3,4]
```

### Shallow copy

Each *field* value from the object A are copying in a new empty object B.  
- [Primitive](../../data/types/types.md) are copied: changes from an object won't affect the other one
- Other objects won't be copied, but referenced: if it changes, it will be the case for both objects

```python
list1 = [1, [2, 3]] 
list2 = copy.copy(list1) # Shallow copy 

list1[0] = 10
list1[1][0] = 20

print(list1) # [10,[20,3]]
print(list2) # [1,[20,3]]
```

<!--
QUOTE: In a language without primitive types (where everything is an object), all fields of the copy reference the same objects as the fields of the original. 

EXAMPLE: [python](code/languages/python.md)
-->

### Deep copy

A complete copy of an object A to object B. The two objects are completely independent: changing one won't affect the other.

<!--
WIP
[Singleton pattern](https://wikipedia.org/wiki/singleton_pattern)
-->