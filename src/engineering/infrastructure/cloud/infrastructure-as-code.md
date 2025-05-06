---
aliases: [IaC]
tags: []
---

# Infrastructure as Code

[Infrastructure as Code](https://wikipedia.org/wiki/infrastructure_as_code) (IaC) is a way of managing servers, data centers and networks using code instead of manual processes. This allows for more efficient and automated management of IT infrastructure, as well as features like versioning, continuous integration, automated testing, code review, etc.

## Cloud provisioning

- Deploy cloud resources ([VM](../../devops/virtualization.md), virtual disks, load balancers, …) from description file
- Can support single or multiple providers
- The *control plane* can be access via [API](/engineering/web/api.md)

**Tools:** [Terraform](../../../code/tools/terraform.md), Pulumi, AWS CloudFormation, [LocalStack](https://localstack.cloud/)

## Configuration management

**Problems**
- Manual changes
	- Prone to errors
	- Can't keep track of the changes (logs, documentation, etc)
	- The greater the number of changes, the more uncertain the system's state becomes.
	- [Horizontal scaling](../../architecture/quality-attributes/scalability.md) makes the system harder to maintain (e.g. server farm, running containers)
- Script automation
	- Lack flexibility
	- If it fail in the middle of the execution, system stay in a semi-configured/undefined state.

**Solutions**
- Desired State Configuration
	- Specify state in which the system must be (declarative)
	- The tool automatically decide actions to take to be as close as possible
- [idempotence](../../../code/glossary/idempotence.md) command steps:
	- Accept a desired state as input
	- Determine the current state of the system
	- Compare it with desired state
	- Determine actions to reach desired state
	- Carry out the actions
- [immutable](../../../code/glossary/immutable.md) infrastructure
	- State of machine externalized (in a remote db)
	- Request router (e.g. load balancer) in front of server
	- Recreate new server from scratch
	- Kill old server when transition is done

**Tools:** Ansible, SaltStack, Chef, CFEngine, Puppet

## Server templating

- If you have multiple servers, running a configuration management tool on each of them is too slow

**Tools:** Vagrant, [Docker](../../../code/tools/docker.md), Packer