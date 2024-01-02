---
aliases: []
tags: []
---

# SOLID

The [SOLID](https://wikipedia.org/wiki/solid_(object-oriented_design)) principles is a set of good practices that focus on flexibility and maintainability. They apply especially well on [OOP](../paradigms/object-oriented.md).

## In a nutshell

- [Single responsibility](https://wikipedia.org/wiki/single-responsibility_principle) – Class has one job to do. Each change in requirements can be done by changing just one class.
- [Open–closed](https://wikipedia.org/wiki/open%e2%80%93closed_principle "open–closed principle") – Class is open to be used by others, but closed to be changed by others.
- [Liskov substitution](https://wikipedia.org/wiki/liskov_substitution_principle "liskov substitution principle") – Class can be replaced by any of its children. Children classes inherit parent's behaviour.
- [Interface segregation](https://wikipedia.org/wiki/interface_segregation_principle "interface segregation principle") – When classes promise each other something, they should separate these promises (interfaces) into many small promises, so it's easier to understand.
- [Dependency inversion](https://wikipedia.org/wiki/dependency_inversion_principle "dependency inversion principle") – When classes talk to each other in a very specific way, they both depend on each other to never change. Instead classes should use promises (interfaces, parents), so classes can change as long as they keep the promise.

## Principles

### Single Responsibility

> There should never be more than one reason for a class to change.

Don't put methods in class that has nothing to do with the class. 

```python
# BAD
class User:
	init(name, email)
	sendEmail(message): …

# GOOD
class User:
	init(name, email)

class EmailHandler:
	sendEmail(user, message): …
```
`User` class shouldn’t have the responsibility to `sendEmail`

See: [Separation of concerns](separation-of-concerns.md)

### Open-closed

> Software entities should be open for extension, but closed for modification.

- Class should be generic
- Don’t directly modify a class: implement extensions via abstraction / polymorphism.

```python
# BAD
class AreaCalculator:
	init(shapes)
	sum():
		foreach (shape in shapes):
			if (shape is "square"): …
			elif (shape is "circle"): …
		return array_sum(areas)

# GOOD
class Square:
	init(length)
	area(): …

class Circle:
	init(radius)
	area(): …

class AreaCalculator:
	init(shape, area)
	sum():
		foreach(shape in shapes):
			area[] = shape.area()
		return array_sum(areas)
```
If we were to add a new shape, we would need to modify the `AreaCalculator` each time. Instead of calculating the area for each shape in the calculator, let each shape provide its own area.

### Liskov Substitution

> Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.

- When inherited class overrides behavior of parent's method, there is probably an LSP violation.
- When this happen, create a more generic parent class or interface 

```python
# BAD
class Rectangle:
	init(width, height)
	setWidth(w): width = w
	setHeight(h): height = h
	area() = width * height

class Square < Rectangle:
	# override
	setWidth(w): width = w, height = w
	setHeight(h): width = h, height = h

# GOOD
interface Shape:
	area()

class Rectangle < Shape:
	init(width, height)
	area(): return width * height

class Square < Shape:
	init(side)
	area(): return side * 2
```

See: [Design by contract](../paradigms/design%20by%20contract.md)

### Interface Segregation

> Clients should not be forced to depend upon interfaces that they do not use.

Chose many specific interfaces rather than one general interface

```python
# BAD
interface Animal:
	run()
	fly()

class Bird:
	move():
		animal.fly

# GOOD
interface GroundAnimal:
	run()

interface SkyAnimal:
	fly()
```
`Bird` class never use `run()`, so it should be split into other specifics abstract class / interfaces.

### Dependency Inversion

> Depend upon abstractions, not concretions.

High-level modules (e.g. business logic) shouldn't depend on low-level modules (e.g. database operations). Both should depend from abstraction (e.g. interfaces).

```python
# BAD
class EventTracker:
	init(logger): logger = ConsoleLogger.new

# GOOD
class EventTracker:
	init(logger)
```
You can specify the logger when you instantiate the class, so you don't depend of a specific logger.

## Resources

- [SOLID_cheatsheet](assets/solid_cheatsheet.pdf) – by [Monterail](https://www.monterail.com/)