# Tensor

A [tensor](https://en.wikipedia.org/wiki/Tensor) is a mathematical object that can represent data in different dimensions

| Dimensions | Name                                                  | Description       | Notation                                                                                                                                                                                         |
| ---------- | ----------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0D         | [Scalar](/engineering/maths/algebra/tensor/scalar.md) | A single number   | $k$                                                                                                                                                                                              |
| 1D         | [Vector](/engineering/maths/algebra/tensor/vector.md) | A list of numbers | $\mathbf{v} = \begin{bmatrix} v_1 & v_2 & v_3 & \dots \end{bmatrix}$                                                                                                                             |
| 2D         | [Matrix](/engineering/maths/algebra/tensor/vector.md) | A grid of numbers | $\mathbf{A} = \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1,y} \\ a_{21} & a_{22} & \dots & a_{2,y} \\ \vdots & \vdots & \ddots & \vdots \\ a_{x,1} & a_{x,2} & \dots & a_{x,y} \end{bmatrix}$  |
| 3D+        | High-dimensional array                                | –                 | $\mathbf{T} = \begin{bmatrix} \begin{bmatrix} t_{111} & t_{112} \\ t_{121} & t_{122} \end{bmatrix}, \begin{bmatrix} t_{211} & t_{212} \\ t_{221} & t_{222} \end{bmatrix}, & \dots \end{bmatrix}$ |

## Example of applications

- [Algebra](/engineering/maths/algebra/algebra.md): to apply operations on data with multiple dimensions
- [Physics](/engineering/maths/physics/physics.md): to describe physical properties (stress, strain, electromagnetic fields, spacetime, …)
- [Machine learning](/engineering/machine-learning/machine-learning.md): to store and manipulate data (c.f. [tensor in machine learning](https://en.wikipedia.org/wiki/Tensor_(machine_learning)))