#!/bin/bash

echo "Creating welcome builder image"

docker image build -t welcome-builder:v1 -f Dockerfile.build .

docker container create --name welcome-builder-container welcome-builder:v1

echo "Copying executable between containers."

docker container cp welcome-builder-container:/myapp/welcome .

docker container rm -f welcome-builder-container

echo "Creating runtime image"

docker image build -t welcome-runtime:v1 .

rm welcome