#!/bin/bash
docker_acct=sigurdsonbrian
app_name=page-view
version=v0.0.1
full_name=${docker_acct}/${app_name}:${version}

# check for existing image
result=''
result=$(docker image ls | grep -i ${docker_acct}/${app_name} | awk '{print $3}')
if [[ ${result} != '' ]]; then
    echo "Container exists with id: " ${result}
    echo "Removing container:  docker rmi ${result}"
    docker rmi ${result}
else
    echo "A prior container does not exist."
fi
# echo $result
# echo $full_name

# test if app_name already exists
if [[ -f ${app_name} ]]; then
    echo "The file ${app_name} exists.  Removing...."
    rm -f ${app_name}
else
    echo "The file ${app_name} does not already exist."
fi


# complile
echo "Compiling... CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go.exe build -o ${app_name}"
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go.exe build -o ${app_name}

# build the image
echo "docker build -t ${full_name} --build-arg APP_NAME=${app_name} ."
docker build -t ${full_name} --build-arg APP_NAME=${app_name} .

# push it to docker hub
echo "docker push ${full_name}"
docker push ${full_name}