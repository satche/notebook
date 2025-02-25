---
aliases: []
tags: []
---

# Python

<!--
In Python, everything is a first-class object!

```python
a = 1
print(type(a)) # <class 'int'>
```

`lambda` → anonymous function

[](/engineering/architecture/paradigms/object-oriented.md#Object%20copying)
→ QUOTE: In a language without primitive types (where everything is an object), all fields of the copy reference the same objects as the fields of the original. 
-->

## Naming and conventions

| Nom       | Description                                                                        |
| --------- | ---------------------------------------------------------------------------------- |
| `_foo`    | Variable/method is [private](/code/glossary/access_modifier.md)                    |
| `foo_`    | Avoid naming conflict with [reserved keywords](/code/glossary/reserved_keyword.md) |
| `__foo`   | Name mangling: will add the class name as prefix → `_ClassName__foo`               |
| `__foo__` | Special attribute/method provided by Python                                        |
| `_`       | Temporary/throaway variable                                                        |

## Resources

### Learning

- [pythoncheatsheet.org](https://pythoncheatsheet.org/) – Big general online cheatsheet
- [automatetheboringstuff.com](https://automatetheboringstuff.com) – Open source book about automation with Python
- [patrickwalls.github.io/mathematicalpython](https://patrickwalls.github.io/mathematicalpython/) – An introduction to mathematical computing with Python