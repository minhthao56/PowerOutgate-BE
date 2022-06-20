DOCKER ?= docker
DOCKER_COMPOSE ?= docker-compose
KUBECTL ?= kubectl


all: build

build-be:
	$(DOCKER) build -t power-outage-api .