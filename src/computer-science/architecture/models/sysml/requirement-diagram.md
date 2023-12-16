---
aliases: []
tags: []
---

# Requirement diagram

A [requirement diagram](https://wikipedia.org/wiki/requirement_diagram) ensures that the solutions meets the client's needs. It describes constraints that can be physical, technical, functional, etc.

It's especially useful to formulate, define and anticipate stakeholders' needs.

## Notation

Requirement are usually specified by an ID and a description. They also are link together by relationships: `contain`, `copy`, `derive`, `verify`, `refine`, `trace`, …

- **Contains**: a requirement includes another one. `――⨁`
- **Derive**: a requirement is based on another one.
- **Satisfy**: an element of the model allows to satisfy a requirement.
- **Verify**: a requirement verify and validate another one.
- **Refine**: a requirement is redefine as another

## Example

![Requirement diagram example](https://docs.nomagic.com/download/attachments/33194333/requirement_diagram.png?version=1&modificationdate=1528804192480&api=v2)

## Resources

- [Requirement Diagram](https://mermaid.js.org/syntax/requirementdiagram.html) – Mermaid modeling language