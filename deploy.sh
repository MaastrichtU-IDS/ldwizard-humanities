#!/bin/bash

## Use cache:
ssh ids3 'cd /data/deploy-services/ldwizard-humanities ; git pull ; docker-compose -f ./docker/docker-compose.prod.yml up --build --force-recreate -d'

## Without cache:
# ssh ids3 'cd /data/deploy-services/ldwizard-humanities ; git pull ; docker-compose -f ./docker/docker-compose.prod.yml build ; docker-compose down ; docker-compose -f ./docker/docker-compose.prod.yml up --force-recreate -d'