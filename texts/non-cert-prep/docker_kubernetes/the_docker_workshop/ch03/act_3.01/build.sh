#!/bin/bash

set -xe

REGISTRY=dev.docker.local:5000
SERVICE_NAME=basic-app
GIT_VERSION=$(git log -1 --format=%h)

echo "Registry: $REGISTRY"
echo "Service: $SERVICE_NAME"
echo "Git Version: $GIT_VERSION"

docker build -t $REGISTRY/$SERVICE_NAME:$GIT_VERSION .

docker push $REGISTRY/$SERVICE_NAME:$GIT_VERSION
