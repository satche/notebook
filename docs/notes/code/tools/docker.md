---
aliases: []
tags: []
---

# Docker

[Docker](https://wikipedia.org/wiki/docker_(software)) is a containerization tool

## Commands

```shell
$ docker ps -s     # overview of running containers
$ docker system df # show docker disk usage
```

## Dockerfile

An image docker is composed of single `DockerFile`, which consist of a series of layers. Most of them are read-only, but some are writable and deleted with the container.

Each instruction in the file creates a layer.
```Dockerfile
FROM ubuntu:18.04
COPY . /app
RUN make /app
CMD python /app/app.py
```
- `FROM` creates a layer from the Docker image.
- `COPY` adds files from your Docker client’s current directory.
- `RUN` instructions are executed at build (`docker build`). There can be multiple.
- `CDM` instruction is executed when container start (`docker run`). There can be only one.

After an image is build, the layers are cached. When a layer changes, all subsequent layers are created from scratch. Start with steps that change less frequently.

### Multi-stage

Name stages to have more control on orchestration.

```dockerfile
# Build base
FROM node:16-alpine AS base
RUN apk add --update graphicsmagick

# Build prod based on previous base stage
FROM base AS prod
WORKDIR /home/node/app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .

CMD ["node", "index.js"]
```

You can specify which stage of the dockerfile to use
```shell
$ docker build --target prod -t image:latest
```

Read more: [Multi-stage build](https://docs.docker.com/build/building/multi-stage/)

### Tips & tricks

- Use `COPY` instead of `ADD` ([read more](https://docs.docker.com/develop/develop-images/dockerfile_best-practices)).
- Separate `COPY` files instructions to avoid invalidating all of them if only one change.
- In hosted platforms, there is usually no access to previously cached layers. The builds are slower.

## Docker-compose

The `docker-compose.yaml` file specify the orchestration of multiple containers: ensure availability, schedule build and execution, test running and restart, manage network and discover services (which are containers in production).

```shell
$ docker-compose up   # auto-build image and starts containers
$ docker-compose down # remove containers and default network, keep volumes
$ docker-compose down --volumes # remove the volumes
```

```yaml
# Deployment of a simple TODO webapp

version: '3'
services:
	
	frontend:
		container_name: frontend
		image: web-server
		restart: always
		ports:
			- '8082:8080' # host:container
		environment:
			- API_ENDPOINT_URL=https://api:8081
		depends_on # Precedence rules:
			- api  # <- need to start before frontend
		volumes: # Volumes to mount
			- ./frontend:/usr/share/nginx/html # host:container
		command: ["nginx", "-g", "daemon off;"]
	
	api:
		container_name: api
		build:
			context: "./api"
			dockerfile: "Dockerfile.custom"
			target: "prod" # stage to target in dockerfile
			labels:
				com.example.description: "foobar" # metadata
		environment:
			- REDIS_ENDPOINT=redis
			- REDIS_PWD=ccp2
		working_dir: /root/app
		depends_on
			- redis

	redis:
		container_name: redis
		image: redis
		restart: on-failure
		command: "redis-server --requirepass"
```

### Swarm

Swarm mode allow to manage multi-host clusters.

```shell
$ docker swarm init # init swarm with current node as manager
$ docker swarm join --token <token> <manager-ip> # join cluster
```

- Commands run on manager node are executed on all worker nodes
- Allow load-balancing

```yaml
version: "3"
services:
	web
		image: …
		deploy:
			replicas: 5
			resources:
				limits:
					cpus: "0.1"
					memory: 50M
			restart_policy
				condition: on-failure # restart containers if one fails
			ports:
				- "4000:80" # host:container
			expose:
				- "80" # only available to linked services in same network
			networks:
				- webnet # containers share port via load-balancer network
	
	visualizer:  
		image: dockersamples/visualizer:stable  
		ports:  
			- "8080:8080"  
		volumes:  
			# visualiser service access to the host socket file for docker
			- "/var/run/docker.sock:/var/run/docker.sock"
		deploy:  
			placement:  
				constraints: [node.role == manager] # on manager only
			networks:  
				- webnet
```

Read more: [Swarm mode overview](https://docs.docker.com/engine/swarm/)

## Resources

**General documentation**
[docker.com](https://docker.com) – Website
[docs.docker.com](https://docs.docker.com) – Documentation

**Tips & Tricks**
[DockeFile best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices) – Documentation