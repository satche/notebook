# NoSQL

A [NoSQL](https://wikipedia.org/wiki/nosql) system propose a different architecture than the one based on tables, found in [rdbms](../rdbms.md)

It is used to propose solution to manage issues related to the [big data](https://wikipedia.org/wiki/big_data) and [real-time web](https://wikipedia.org/wiki/real-time_web) applications.

## Main characteristics

- Open-source
- Design to work on [cluster of machines](https://wikipedia.org/wiki/cluster_computing).
- Don’t rely on relational model, schema or structure
- *Not-Only SQL.* Supports SQL-like languages, but usually relies on other ones.
- Follow the [BASE](../../../architecture/principles/acid.md#base) properties
- [Horizontal scalability](../../../architecture/quality-attributes/scalability.md) (scale out)

## Aggregate

An aggregate collection of related objects are treated as an unit

- Suitable for clusters
- Atomicity guaranteed

```json
// User and products are related,
// the result of the query is merged
{
  "user": {
    "name": "Alice",
    "products": [
      {
        "id": 1,
        "name": "Laptop"
      },
      {
        "id": 2,
        "name": "Smartphone"
      }     
    ]
  }
}
```