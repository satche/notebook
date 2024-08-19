---
aliases: [Containerization, VM, Virtual Machines]
tags: []
---

# Virtualization

## Hypervisor

[Hypervisor](https://wikipedia.org/wiki/hypervisor) is the piece of software that runs virtual machines. It allows to run several OS on a single physical machine. It's typically responsible to allocate resources and provide interface between the guest (the VM) and the host.

There is two types of hypervisor:

**Type-1: Native / Bare-metal**
- Hardware virtualization
- Sits between hardware and the VM

**Type-2: Hosted**
- Software virtualization
- Sits on top of the host's OS

## Virtual Machines

- [Pets](glossary/pet-vs-cattle.md#pets) type

## Containerization

Containers is the principle to run processes, like applications, in an isolated environment. We call that [OS-level virtualization](https://wikipedia.org/wiki/os-level_virtualization).

**Some characteristics:**
- Lightweight and serverless: allow for fast build and deployment
- Don't have to embark an all OS
- Run natively on the machine
- Good for reproducibility, consistency and scaling
- Isolation at process level (less secure than VMs)
- [Cattle](glossary/pet-vs-cattle.md#cattle) type