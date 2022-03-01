# VOLUME example

# TZDATA is requesting geographic location during apache2 installation
# Setting the TZ and DEBIAN_FRONTEND values seem to satisfy it.
ARG TZ="America/New_York"
FROM ubuntu:latest
ENV DEBIAN_FRONTEND="noninteractive"
RUN apt-get update && apt-get install apache2 -y
VOLUME ["/var/log/apache2"]

