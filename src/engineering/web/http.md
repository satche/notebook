---
aliases:
  - Hypertext Transfer Protocol
---

# HTTP

[HTTP](https://en.wikipedia.org/wiki/HTTP) is a protocol used to send and receive content (e.g files, pages, HTML documents) over the web.

## Requests

- GET: retrieve data, no body, [idempotent](../../code/glossary/idempotence.md), safe
- QUERY: same as get, but with body
- POST: unsafe, change state

|                      | GET                                        | QUERY                                      | POST                                          |
| -------------------- | ------------------------------------------ | ------------------------------------------ | --------------------------------------------- |
| Safe                 | yes                                        | yes                                        | potentially no                                |
| Idempotent           | yes                                        | yes                                        | potentially no                                |
| URI for query itself | yes (by definition)                        | optional (Location response field)         | no                                            |
| URI for query result | optional (Content-Location response field) | optional (Content-Location response field) | optional (Content-Location response field)    |
| Cacheable            | yes                                        | yes                                        | yes, but only for future GET or HEAD requests |
| Content (body)       | "no defined semantics"                     | expected (semantics per target resource)   | expected (semantics per target resource)      |

## HTTPS

[HTTPS](https://en.wikipedia.org/wiki/HTTPS) is the secure version of HTTP, encrypted with TLS or SSL.