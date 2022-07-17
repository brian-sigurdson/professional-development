FROM alpine
RUN apk update && apk add wget curl tar

#RUN wget -O test.txt https://github.com/PacktWorkshops/The-Docker-Workshop/blob/master/Chapter03/Exercise3.02/100MB.bin

CMD mkdir -p /var/www/html

WORKDIR /var/www/html/

ADD Dockerfile /tmp/

RUN cat /tmp/Dockerfile 