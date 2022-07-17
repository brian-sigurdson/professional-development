#!/bin/bash
set -ex

USER=${USER}
SERVICE_NAME=basic-app
version=$(cat VERSION)

docker build -t $USER/$SERVICE_NAME:$version --file Dockerfile_ver1 .