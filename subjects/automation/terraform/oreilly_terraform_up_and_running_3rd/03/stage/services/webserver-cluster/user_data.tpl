#!/bin/bash

echo $RANDOM > index.html
echo "DB address: ${db_address}" >> index.html
echo "DB port: ${db_port}" >> index.html
nohup busybox httpd -f -p "${server_port}" &