DOCKER ?= docker
DOCKER_COMPOSE ?= docker-compose
KUBECTL ?= kubectl


all: build

build-be:
	$(DOCKER) build -t power-outage-api .

deploy-all:
	$(KUBECTL) apply -f deployment/postgres-config.yaml
	$(KUBECTL) apply -f deployment/postgres-secrect.yaml
	$(KUBECTL) apply -f deployment/postgres.yaml
	$(KUBECTL) apply -f deployment/power-outage-be.yaml