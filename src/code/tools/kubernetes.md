---
aliases: []
tags: []
---

# Kubernetes

## Components

### Manifest

```shell
$ kubectl create -f deploy.yaml # Create manifest file
```

```yaml
apiVersion: v1
kind: Pod # Deployment, Service, …
metadata:
	name: redis
	labels:		
		app: todo
		component: redis
spec:
	containers:
	- name: redis
	  image: redis # docker image
	- ports:
		- containerPort: 6379
	- resources:
		- limits:
		- cpu: 100m
	- args:
		- redis-server
		- --requirepass ccp2
		- --appendonly yes
```

### Pods

```shell
$ kubectl get pods # List all pods
$ kubectl delete pod <name>
```

- Set of 1 or more container
- Containers share the same environment (tightly-coupled)
	- Memory
	- Storage volumes
	- Network (same IP. They use localhost to communicate between them)
- [Cattle](../../engineering/devops/glossary/pet-vs.-cattle.md#cattle) strategy: if a container fail, whole pod is recreated from scratch
- Labels: key-value tag assigned to pods to help services target them with queries

### Services

```shell
$ kubectl get svc # List all services
```

- Regroup a set of pods into a single resource
- Provide an endpoint to incoming pods
- Load-balances the incoming request

**Three types of load balancing**
- *ClusterIP* – Most common one. Can't be access from the outside of the cluster
- *NodePort* – Can be access from outside with `<node_ip>:<node_port>`
- *LoadBalancer* – Use the cloud provider load-balancer on top of NodePort

### Deployments

Rolling update: push changes without interrupting the service by creating a new replica set

```shell
$ kubectl get deployments # List running, updated and available replicas
$ kubectl rollout status <name>
```

## Resources

- [kubernetes.io](https://kubernetes.io/) – Official website