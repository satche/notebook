---
aliases: [Relational Database Management System]
tags: []
---

# RDBMS

A [relational database](https://wikipedia.org/wiki/relational_database) is a type of database that stores information in tables that are related to each other. It is sometimes referred to as a Relational Database Management System (RDBMS). This architecture is in contrast to [NoSQL](nosql/nosql.md)

## Description

Data is organized in two-dimensional arrays, called **tables** (or *relations*). Tables are composed of **rows** (*records* or *[tuple](../../../code/glossary/tuple.md)*) and **columns** (*attributes* or *fields*).

To access some of the data, the user has to send a *request* to the system which returns a *response* with the desired result. SQL language is typically used to formulate these requests.

Unless NoSQL, RDBMS can implement [acid](../../architecture/principles/acid.md) transactions.

## Scalability

A relational database has a [vertical scalability](../../architecture/quality-attributes/scalability.md).

The system performance is dependent on hardware capabilities such as CPU and RAM. Allocating more power to the server will enable it to serve more clients. It is possible to create multi-server architectures, such as master-slave, but they are less suitable.

## Impedance Mismatch

One of the con of RDBMS are [impedance mismatch](https://wikipedia.org/wiki/object%e2%80%93relational_impedance_mismatch). As the relational model use tables to structure data, it sometime don’t reflect the real data structure.