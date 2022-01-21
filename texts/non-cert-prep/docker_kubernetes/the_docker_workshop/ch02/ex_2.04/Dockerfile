# WORKDIR, COPY, and ADD example

# TZDATA is requesting geographic location during apache2 installation
# Setting the TZ and DEBIAN_FRONTEND values seem to satisfy it.
ARG TZ="America/New_York"
FROM ubuntu:latest
ENV DEBIAN_FRONTEND="noninteractive"
RUN export $TZ && apt-get update && apt-get install apache2 -yq
WORKDIR /var/www/html
COPY index.html .
ADD https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png ./logo.png
CMD ["ls"]

