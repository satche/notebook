---
aliases: []
tags: []
---

# Cloud

[Cloud computing](https://wikipedia.org/wiki/cloud_computing) can be define as a cluster of servers that share storage and power on-demand with users. Its core feature is the provision of IT infrastructure and applications [as a service](as-a-service.md) in scalable way.

Essential characteristics of cloud computing are:
- *On-demande self service*: user can access computer capabilities without human-interaction
- *[Broad Network Access](../network/glossary/bna.md)*: capabilities are accessibles on network through standard mechanisms
- *Resource pooling*: cloud resources are pooled to serve multiple consumers
- *Rapide elasticity*: capabilities scale, usually automatically
- *Measured service*: cloud systems automatically control and optimize resources

## Topics

- [XaaS](as-a-service.md) – Different types of services, which give certain degree of control and customisastion to the user.
- [Edge Computing](edge-computing.md) – When computers are close to a device, like a sensor, to do some operations before sending to the cloud.
- [Infrastructure as Code](infrastructure-as-code.md) to repeat the writing of multiple servers configuration
- [Internet of Things](iot.md) – Connected object that send and receive information, like sensors

## Layers

| Layer       | Role                                                                                                | Example                                                   |
| ----------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Application | Host, store, process the data in the cloud. Generate reports for analysis and serve it to the user. | Cloud servers, cloud storage, cloud analytics             |
| Support     | Process the data close to the source, before sending it to the cloud.                               | Edge servers, gateway servers, local analytics            |
| Network     | Communication between devices and other network components.                                         | Routers, gateways, access points, communication protocols |
| Device      | Data collect and acquisition.                                                                       | Sensors, embedded systems, smartphones                    |

## Characteristics

Cloud computing allow a lot of benefits compared to a single centralized server:

- [Availability](../../architecture/quality-attributes/availability.md) – If a server goes down (e.g. due to too much demand), another server is able to handle the requests
- [Security](../../architecture/quality-attributes/security.md) – Cloud providers can guarantee data center protection, with monitoring, 24/7 surveillance, etc.
- [Costs](../../../management/glossary/tco.md) – Cloud is financially interesting as it allows to adapt resources (and therefore costs) with the demand

## Resources

- [Definition of Cloud Computing](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf) – NIST