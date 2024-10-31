---
tags:
  - glossary
  - programmation
  - programmation/function
---

# Currying

[Currying](https://en.wikipedia.org/wiki/Currying) is a technique to change a function with multiple argument into many functions that each take one argument.

It's more used as a design approach for certain computer science fields. In some langages, function can only have one argument.

```python
def add_function(x,y):
    return x + y

# Currying
def outer_function(x):
    def inner_function(y):
        return x + y
    return inner_function
    
closure = outer_function(10)
print(closure(5)) # Output: 15
```

> [!NOTE]
> `inner_function` remember the value of `x` even outside the scope. It's a case of [closure](closure.md)
