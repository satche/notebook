---
aliases: [Data-flow diagrams, DFD]
tags: []
---

# DFD

[Data-flow diagram](https://wikipedia.org/wiki/data-flow_diagram) illustrates the flow of information for processes and systems.

## Notation

- **External entity**: Represented by a noun, they are elements outside the system that emits or receive data.
- **Process**: Represented by a verb, they are actions that change the data, producing an output.
- **Data Store**: Represented by a noun, they are elements that store a type of data, like a table in a database.
- **Data flow**: Represented by the name of the data, they are the route between all the others elements.

![DFD Process Example](https://cdn-images.visual-paradigm.com/guide/dfd/what-is-data-flow-diagram/02-dfd-process-example.png)

## Some rules

- DFD diagrams represent only **data**, no process, actions or operations…
- Process and data store always have minimum 2 data flows: **in** and **out**
- All processes must be linked to either another process or a data store.

## Levels

### Level 0

The *contextual level* is highly abstracted and serve only a resumed overview. It includes:
- All external entities
- Only one process
- No data stores
- Main data flows
![Context DFD example](https://cdn-images.visual-paradigm.com/guide/dfd/what-is-data-flow-diagram/18-context-dfd-example.png)

### Level 1

The first level highlight main functions of the system by decomposing the main process into subprocesses.
![Level 1 DFD example](https://cdn-images.visual-paradigm.com/guide/dfd/what-is-data-flow-diagram/19-level-1-dfd-example.png)

### Level 2

The second level take each processes from level 1 and details it into other incremental subprocess (1.x, 2.x, etc.).
![Level 2 DFD example](https://cdn-images.visual-paradigm.com/guide/dfd/what-is-data-flow-diagram/20-level-2-dfd-example.png)

> You can repeat the process and dig deeper in levels, splitting the process into more details, but 1-2 levels are generally enough.

## Resources

- [What is Data Flow Diagram?](https://www.visual-paradigm.com/guide/data-flow-diagram/what-is-data-flow-diagram/) – Visual Paradigm