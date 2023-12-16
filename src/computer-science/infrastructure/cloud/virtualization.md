---
aliases: [Virtual Machines, VM, Containers]
tags: []
---

# Virtualization

## Containers

Containers is the principle to run processes, like applications, in an isolated environment. We call that [OS-level virtualization](https://wikipedia.org/wiki/os-level_virtualization).

One of the most containerization software is [Docker](../../../code/tools/docker.md).

### VM comparison

Containers have some advantages over virtual machines. As it don’t take a whole operating system, they are lighter. It means faster startup times and lower resource consumption.

The container isolates the application from its environment. It enhances cross-platform portability, flexibility in the deployment of applications and improve security. The communication between containers are allowed, unless in a VM.

In a [pet vs. Cattle](../../devops/glossary/pet-vs.-cattle.md) model, it is cattle-oriented.

### Cluster and orchestration

- Automate the deployment of containers and their connection.
- Update containers without service interruption ([continuous integration](../../devops/ci-cd.md))

Containers clusters manager: [Docker Swarm](../../../code/tools/docker.md#swarm), [Kubernetes](../../../code/tools/kubernetes.md)