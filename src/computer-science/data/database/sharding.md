---
aliases: []
tags: []
---

# Sharding

[Sharding](https://wikipedia.org/wiki/shard_(database_architecture)) is subdividing a database into smaller pieces called *shards*. Placing shards on multiple machines improve performances as it split workload (same principle as [load balancer](../../infrastructure/cloud/load-balancing.md)).

[Consistent hashing](../index.md#consistent-hashing) is used to automatically distribute objects uniformly across shards.