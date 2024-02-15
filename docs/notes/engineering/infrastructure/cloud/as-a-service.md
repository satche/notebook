---
aliases: [AAS, XaaS, IaaS, PaaS, FaaS, SaaS]
tags: []
---

# As a Service

The term [As a Service](https://wikipedia.org/wiki/as_a_service) defines a model of [index](../../../index.md) architecture. It summarizes how software, infrastructure, platforms, and other services are delivered over a network. It defines which parts of a product are handled by the user or the provider.

## Overview

|                | On Prem | IaaS            | PaaS            | FaaS     | SaaS     |
| -------------- | ------- | --------------- | --------------- | -------- | -------- |
| **Application**    | User    | User            | User            | User     | Provider |
| **Data**           | User    | User            | User            | User     | Provider |
| **Runtime**        | User    | User            | User / Provider | Provider | Provider |
| **Middleware**     | User    | User            | Provider        | Provider | Provider |
| **OS**             | User    | User / Provider | Provider        | Provider | Provider |
| **Virtualization** | User    | Provider        | Provider        | Provider | Provider |
| **Servers**        | User    | Provider        | Provider        | Provider | Provider |
| **Storage**        | User    | Provider        | Provider        | Provider | Provider |
| **Networking**     | User    | Provider        | Provider        | Provider | Provider |

A good analogy of this is [Pizza-as-a-service](https://www.optimizely.com/insights/blog/pizza-as-a-service/)

## IaaS

[Infrastructure as a Service](https://wikipedia.org/wiki/infrastructure_as_a_service) gives IT resources on-demand. User can access to a [virtu[virtual asset](virtualization.md)Container), the same way they would access to their personal computer.

**Examples**: AWS, Microsoft Azure, GCP, DigitalOcean

## PaaS

[Platform as a Service](https://wikipedia.org/wiki/platform_as_a_service) provide dev tools and predefined frameworks. It generally allows to deploy app on different 

**Examples**: Heroku, Google App Engine, Microsoft Azure App Service, AWS Elastic Beanstalk

## FaaS

[Function as a Service](https://wikipedia.org/wiki/function_as_a_service) allows users to run code, mostly functions from an application, without having to manage the underlying infrastructure. Developers can focus on writing code and not worrying about server maintenance or other related tasks.

It is well-suited for short-running, stateless and event-driven applications *e.g. microservices, bots, IoT, service integration, etc.*

It’s often referred as [Serverless](https://www.notion.so/serverless-1bb19567a7a846e58fc76d4e408528fc?pvs=21) model.

**Example**: AWS Lambda, Google Cloud Functions, Azure Functions OpenFaaS, OpenWhisk

### Pricing models

Programming is event-based: the function of an application is triggered after a request. It follows a pay-on-demand model, where the billing can be according to **consumed resources** (execution time and memory) or **number of invocations**. Network traffic is billed separately.

In a nutshell: **no charge** is applicable when your code is **not running**.

Read more: [OPEX](../../../management/glossary/tco.md#opex)

### Lifecycle

1. The system initialize the extensions, the runtime and the functions.
2. The function is invoked and the system get ready for further invocations.
3. The system shutdown when the function is not invoked after a certain amont of time

#### Cold start

The [Cold start](https://wikipedia.org/wiki/cold_start_(computing)) problem refers to the delay between the execution of a function after someone invokes it. The first function requires booting or creating a new container instance, so its execution time is slower than subsequent invocations.

## SaaS

[Software as a Service](https://wikipedia.org/wiki/software_as_a_service) is basically an application deployed on the cloud. User can use them with a subscription.

**Examples**
- CRM, ERP, etc.
- Office 365, Zoom, G Suite, Adobe Suite, etc.
