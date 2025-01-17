---
aliases: [REST, RESTful]
tags: []
---

# API

[Application Programming Interface](https://wikipedia.org/wiki/api) (API) is a way for two or more applications/programs to communicate with each other.

With APIs, an application can easily be accessed via multiple canals: web interface, CLI, scripts, etc. 

For example, in a [service-oriented](service-oriented.md) architecture, web services are a type of API which use the internet as network.

## Types

- **Open APIs**: publicly available, anyone can access it
- **Partner APIs**: used to collaborate between business entities
- **Internal APIs**: private APIs, not exposed on a public network (or, at all)
- **Composite APIs**: combination of different data and services APIs

## Protocols and architectures

### REST

[Representational state transfer](https://wikipedia.org/wiki/representational_state_transfer) (REST) define constraints and standards to assure data consistency in web applications, especially APIs.

#### Constraints

1. **[Client-server](client-server.md)**: enforces the separation of concerns between the UI and the data.
2. **[Stateless](../../infrastructure/network/protocols.md#statless-/-stateful)**: no session is stored by the server, the client's request contains all information necessary to fulfill it.
3. **Cache**: response is labeled has cacheable (or not), so the client can reuse it.
4. **[Layers](layered.md)**: client doesn't know if it's connected to the end-server or middlewares.
5. **Code on demand** (optional): extend or customize functionality of client by transferring code
6. **Uniformity**: 4 constraints ensure a uniform interface
	1. *Identification of resources*, in a clear and unique fashion
	2. *Manipulation of resources*, by the use of representations
	3. *Self-descriptive messages*, by providing exhaustive information
	4. *[HATEOAS](https://wikipedia.org/wiki/hateoas)*, to dynamically serve and discover related resources

#### Resources

- Usually in JSON or XML format
- Can be…
	- Static (post, article, …)
	- Dynamic (weather data, satellites, …)
	- Intangible (stock prices, …)
	- Material (vending machine, dispenser, …)
- URL access
	- Nested: `GET Nested: GET /api/posts/10/comments`
	- Flat: `GET /api/comments?postID=10``

<!-- 

### SOAP

(WIP)

### RPC

(WIP)
 -->

## Resources

- [standards.rest](https://standards.rest/) – Collection of specifications for REST APIs