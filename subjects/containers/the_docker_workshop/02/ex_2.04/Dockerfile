# COPY example
ARG TAG=latest
FROM ubuntu:${TAG}
RUN apt-get update && apt-get install apache2 -y
COPY index.html .

CMD [ "ls" ]