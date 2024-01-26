---
aliases: [Reflected Binary Code]
tags: [data]
---

# Gray code

Sometimes, two values close together have an equivalent binary representation that look totally different. [Gray code](https://en.wikipedia.org/wiki/Gray_code) try to fix this issue.

**Quick example**

| Value | Bits | Gray |
| ---- | ---- | ---- |
| 7 | 0111 | 0100 |
| 8 | 1000 | 1100 |
The 4-bits representation of 7 and 8 look very different. With Gray code, only 1 bit change, allowing a better representation of the gaps between real values.

Note: the difference between two sequence of bits is the [Hamming distance](hamming-distance.md). In this example, 7 and 8 are at a bit-distance of 4, but only of 1 with Gray code.


