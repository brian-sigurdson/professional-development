set -ex

USER=sigurdsonbrian
SERVICENAME=basic-app

version=$(cat VERSION)
echo "version: ${version}"

docker build -f Dockerfile_ver1 -t ${USER}/${SERVICENAME}:${version} .

