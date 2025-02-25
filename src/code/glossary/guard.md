---
aliases: [early exit]
---

# Guard

A [guard](https://en.wikipedia.org/wiki/Guard_(computer_science)) clause is an early condition placed at the beginning of a function/loop. It is typically used to avoid errors during execution.

## Example

```python
def processUserInput(input):
	# Guard
	if input is invalid:
		return

	# Rest of the function
	# …
	return input
```