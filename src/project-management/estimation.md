---
aliases: [Planning]
tags: [project-management]
---

# Estimation

In [Agile](agile/agile.md) methodologies, some principles and tools are often used for planning and time estimation.

## Story points

Story points can be used instead of absolute time units, such as hours or day.

**Principles**
- Abstract metric that measure work complexity, amount, risk, uncertainty and difficulty.
- They shouldn't be used as a way to assign detailed deadlines and resources.

**Guidelines**
- Define an upper limit. No individual task should be more than 16h of work, as it's too difficult to estimate large tasks with confidence.

## Burndown chart

The [burndown chart](https://wikipedia.org/wiki/burndown_chart) is a graphical representation of work left to do versus time.

![Burndown chart example](https://upload.wikimedia.org/wikipedia/commons/8/8c/burn_down_chart.png)

## Velocity

[Velocity](https://wikipedia.org/wiki/velocity_(software_development)) is a metric to measure the amount of work done.

## Planning poker

[Planning poker](https://wikipedia.org/wiki/planning_poker) is a gamified estimation technique.

**Preparation**
- Select a Moderator (e.g. the [PO](agile/scrum.md#product-owner)) who usually don't play
- Define cards with numbers on it
	- Values represent time (hours, days) or more likely Story points.
	- You can even define a card with an unsure option, like a "?" sign.
- Team members receive all the same cards

**Procedure**
- The Moderator gives an overview of a task, typically a [User Story](agile/agile.md#user-story).
- Discussions occur with the team members to clarify assumptions and risks.
- Team members vote by putting a card down.
- Everyone reveals their card simultaneously.
- People with high and low estimates justifiy their choice, discusssion is opened.
- We repeat the estimation until a consensus is reached.

**About cards values**
A non-linear suite is better since the estimation get harder when the choice is between two close numbers. Different sequences can be used:

- [Fibonacci sequence](https://wikipedia.org/wiki/fibonacci_sequence): 0, 1, 2, 3, 5, 8, 13, 21, …
- [Modified Fibonacci](https://wikipedia.org/wiki/fibonacci_scale_(agile)): 0, 0.5, 1, 2, 3, 5, 8, 13, 21, …
- [Power of 2](https://wikipedia.org/wiki/power_of_two): 0, 1, 2, 4, 8, 16, 32, …

*Read more: [Weber–Fechner's law of change](https://wikipedia.org/wiki/weber%e2%80%93fechner_law)*

**Resources**
- [planninpoker.com](https://planninpoker.com/) – A free online planning poker