---
aliases: []
tags: []
---

# Key-Value

A [key-value](https://wikipedia.org/wiki/key%e2%80%93value_database) pair is a [tuple](../../../../code/glossary/tuple.md) of two strings: a unique identifier (key) associated to a value.

Requests are quick and basic, limited to [crud](../../../../code/glossary/crud.md) operations

*Usages: session information, users profiles/preferences, shopping cart, etc.*

*Examples: [Redis](https://wikipedia.org/wiki/redis), [Riak](https://wikipedia.org/wiki/riak)*

Principle of hashmap, stored persistently on disk

## MapReduce

[MapReduce](https://wikipedia.org/wiki/mapreduce) is a framework that simplifies the distribution of large collections of data across multiple servers.

**Steps**

1. Split: divide input data into subsets key-value pairs.
2. Map: do a process on each subset
3. Shuffle: group and sort all values by key
4. Reduce: iIterate over groups and aggregate values of each group