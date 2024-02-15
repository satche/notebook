---
aliases: []
tags: []
---

# Derivative

[Derivative](https://wikipedia.org/wiki/derivative_(mathematics)) show the amount by which a function is changing at one given point.

The [partial derivative](https://wikipedia.org/wiki/partial_derivative) of a function is the of one named variable, where all the other ones are held constant.

## Notation

|                            | Lagrange     | Leibniz              |
| -------------------------- | ------------ | -------------------- |
| Function                   | $f(x)$       | $f$                  |
| 1st derivative             | $f'(x)$      | $\cfrac{df}{dx}$     |
| 2nd derivative             | $f''(x)$     | $\cfrac{d^2f}{dx^2}$ |
| $n^{\text{th}}$ derivative | $f^{(n)}(x)$ | $\cfrac{d^nf}{dx^n}$                     |

## Table

|$y = f(x)$|$\frac{dy}{dx} = f'(x)$ |
|--|--|
|$k$, any constant|$0$|
|$x$|$1$|
|$x^2$|$2x$|
|$x^3$|$3x^2$|
|$x^n$, any constant $n$|$nx^{n-1}$|
|$e^x$|$e^x$|
|$e^{kx}$|$ke^{kx}$|
|$\ln x = \log_e x$|$\frac{1}{x}$|
|$\sin x$|$\cos x$|
|$\sin kx$|$k\cos kx$|
|$\cos x$|$-\sin x$|
|$\cos kx$|$-k\sin kx$|
|$\tan x = \frac{\sin x}{\cos x}$|$\sec^2 x$|
|$\tan kx$|$k\sec^2 kx$|
|$\csc x = \frac{1}{\sin x}$|$-\csc x \cot x$|
|$\sec x = \frac{1}{\cos x}$|$\sec x \tan x$|
|$\cot x = \frac{\cos x}{\sin x}$|$-\csc^2 x$|
|$\sin^{-1} x$|$\frac{1}{\sqrt{1-x^2}}$|
|$\cos^{-1} x$|$-\frac{1}{\sqrt{1-x^2}}$|
|$\tan^{-1} x$|$\frac{1}{1+x^2}$|
|$\cosh x$|$\sinh x$|
|$\sinh x$|$\cosh x$|
|$\tanh x$|$\text{sech}^²x$|
|$\text{sech} x = \frac{1}{\cosh x}$|$-\text{sech} x \tanh x$|
|$\text{cosech} x = \frac{1}{\sinh x}$|$-\text{cosech} x \coth x$|
|$\coth x = \frac{\cosh x}{\sinh x}$|$-\text{cosech}^2 x$|
|$\cosh^{-1} x$|$\frac{1}{\sqrt{x^2-1}}$|
|$\sinh^{-1} x$|$\frac{1}{\sqrt{x^2+1}}$|
|$\tanh^{-1} x$|$\frac{1}{1-x^2}$|

## Matrix

When a matrix is composed of derivatives, it called:

A [Jacobian matrix](https://wikipedia.org/wiki/jacobian_matrix_and_determinant) is a matrix of first partial derivatives.

$$J=\begin{bmatrix}
\cfrac{\partial{f}}{\partial{x}},
\cfrac{\partial{f}}{\partial{y}}
\end{bmatrix}$$

A [Hessian matrix](https://wikipedia.org/wiki/hessian_matrix) is a matrix of second partial derivatives

$$H_{i,j}=
\cfrac
	{\partial{^2f}}
	{\partial{x_i}\partial{x_j}}
$$
