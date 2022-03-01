#!/bin/bash

# this is what i ran to complete activity 1.01
docker run -d --name postgres-db -e "POSTGRES_USER=panoramic" -e "POSTGRES_PASSWORD=trekking" postgres:12
