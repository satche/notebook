---
aliases: [Newton-Raphson]
tags: []
---

# Newton's method

[Newton's method](https://wikipedia.org/wiki/newton%27s_method) is an algorithm to find the real zeros of a function with the derivative of the function to find its roots.

![Newton's method representation](https://upload.wikimedia.org/wikipedia/commons/e/e0/newtoniteration_ani.gif)

## Algorithm

Each new value are found with the following equation:

$$x_{n+1}=x_n-\cfrac{f(x_n)}{f'(x_n)}$$
$x_n$ is the initial guess, $x_{n+1}$ is the next guess

The derivative can be approximated by the [secant method](https://wikipedia.org/wiki/secant_method):

$$f'(x_n)=\cfrac{f(x_n)-f(x_n-1)}{x_n-x_{n-1}}$$

### n-dimensions

Newton's method can be used with a multi-variable function. We need for that to use derivative matrix

Read more [here](https://wikipedia.org/wiki/newton's_method#systems_of_equations).

### Failures

- If $x=0$, it's a zero-divison. We need to change our $x_1$ value
- Sometimes, if the initial guess is too far, and depending of the function, the algorithm may find the answer slowly or not at all.