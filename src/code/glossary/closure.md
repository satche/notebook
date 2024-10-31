---
tags:
  - glossary
  - programmation
  - programmation/function
---


# Closure

A [closure](https://en.wikipedia.org/wiki/Closure_(computer_programming)) is a function that retains access to its lexical scope, even if this function is executed from outside. The enclosed variables persist as long as the closure exist.


## Example
```python
def outer_function(x):
    def inner_function(y):
        return x + y
    return inner_function
    
closure = outer_function(10)
print(closure(5)) # Output: 15
```

Here, `inner_function` remember the value of `x` (10) even after `outer_function` has finish executing.
‡
> [!NOTE]
> In this case, each function take one argument. It's also a case of [currying](currying.md)