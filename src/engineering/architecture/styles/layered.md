---
aliases: [Layered architecture, Layers, Multitier, 1-tier, 2-tier, 3-tier, n-tier]
tags: []
---

# Layered

In [layered architecture](https://wikipedia.org/wiki/multitier_architecture), components are organized in layers which communicate directly only with layers above and below them.

## Layers

Common layers are:
- **Presentation layer**: front-end, UI, view
- **Application layer**: service, functionalities
- **Business layer**: business/domain logic
- **Data access layer**: database, logging, networking

## Tiers

### 1-tier

All components / functionalities are grouped in a same system or machine.

Example are local desktop applications, e.g. media player, word processor, etc.

### 2-tier

Classical 2-tier architecture has two layers: presentation and data.

See: [Client-server](client-server.md)

### 3-tier

Three-tier architecture is very common in web development:

1. **Presentation layer** is a front-end web server serving static content, e.g. *nginx*, *Apache*
2. **Application layer** is a dynamic content processing, e.g. *Symfony*, or *Node.js*
3. **Data access layer** is a back-end database server, e.g. *MySQL*, *MongoDB*

### n-tier

We can add more layers to separate logical component. For example, a bien company could use 4 layers: UI, business logic, services, data.