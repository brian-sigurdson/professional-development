#!/bin/bash

echo "Hello World, v2" > index.html
nohup busybox http -f -p ${server_port} &