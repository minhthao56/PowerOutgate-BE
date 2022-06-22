DOCKER ?= docker
DOCKER_COMPOSE ?= docker-compose
KUBECTL ?= kubectl


all: build

build-be:
	$(DOCKER) build -t power-outage-api .

run-db-docker:
	 $(DOCKER) run --name some-postgres -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres

deploy-all:
	$(KUBECTL) apply -f deployment/postgres-config.yaml
	$(KUBECTL) apply -f deployment/postgres-secrect.yaml
	$(KUBECTL) apply -f deployment/postgres.yaml
	$(KUBECTL) apply -f deployment/power-outage-be.yaml


