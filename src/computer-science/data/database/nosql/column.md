---
aliases: []
tags: []
---

# Column

A [column-oriented](https://wikipedia.org/wiki/column-oriented_dbms) database stores data in tables, organized by columns, whereas [rdbms](../rdbms.md) organize data in rows.

It cas manage large dataset and access it fast. It allows complex analytic calculus but is effective when data has the same type.

*Usages: CMS, blogs, counters, expiring usage, etc.*

*Examples: [Cassandra](https://wikipedia.org/wiki/apache_cassandra), [Hbase](https://wikipedia.org/wiki/apache_hbase), [BigTable](https://wikipedia.org/wiki/bigtable), [Parquet](https://fr.wikipedia.org/wiki/apache_parquet)*

**Pros**

- Only attributes that are needed are read from disk
- Adding new column is easy

**Cons**

- Combining values from multiple column is costly ([tuple](../../../../code/glossary/tuple.md) reconstruction)
- Inserting a new tuple is costly

## Column compression

When there are repeated values, we can encode the column to reduce dataset size and speed up requests.

Sometimes, we don’t have to decode the column to answer the request e.g, sum the values to count number of elements.

### run-length

Count number of repetitions
Format: value, start row, run-length

### bit-vector

For each value in column, create bit vector (one bit / row).
Good for few distinct values.

### dictionary

Replace values by shorter placeholders.
Maintain dictionary to map placeholders back.

### frame of reference

Choose median value as a reference.
Store off-set for following values.
Use `#` marker for “big offsets values” exceptions.

### differential

Like frame of reference, but we store the difference with the preceding row instead of the reference.

We can also use `#` marker for big offsets values.