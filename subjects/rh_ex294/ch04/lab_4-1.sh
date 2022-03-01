#!/bin/bash

# On all hosts in the inventory file
# install httpd
ansible all -m yum -a 'name=httpd state=latest'

# start and enable httpd
ansible all -m service -a 'name=httpd state=started enabled=yes'

# create a user anna
ansible all -m user -a 'name=anna'

# copy /etc/hosts to /tmp on all hosts
ansible all -m copy -a 'src=/etc/hosts dess=/tmp'