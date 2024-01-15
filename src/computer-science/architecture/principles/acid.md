---
aliases: [BASE]
tags: []
---

# ACID

[ACID properties](https://wikipedia.org/wiki/acid) are principles applicable in [rdbms](../../data/database/rdbms.md)

- **A**tomicity: ensures that the transaction is done in its entirety: if one part cannot be executed, the data is restored and nothing happens.
- **C**onsistency: manages the validation of data within the transaction, such as integrity constraints or typing.
- **I**solation: forces autonomy within transactions; they are not dependent on each other, even if their execution is simultaneous.
- **D**urability: provides for the storage of confirmed transactions in order to keep them even in the event of unforeseen circumstances (e.g. server failure).

## BASE

Since ACID properties can't be guarantee in [NoSQL](../../data/database/nosql/nosql.md) databases, they have their own [backronym](https://wikipedia.org/wiki/backronym) : the [BASE properties](https://wikipedia.org/wiki/eventual_consistency).

- **B**asically **A**available: guarantees availability of the data despite the workload by spreading and replicating across the node of the cluster.
- **S**oft-state: database can change during updates or when adding/removing servers; it does not have to guarantee consistency at all times.
- **E**ventually consistent: in the long run, the database will reach a consistent state.

## Resources

- [ACID vs. BASE: Comparison of Database Transaction Models](https://phoenixnap.com/kb/acid-vs-base)