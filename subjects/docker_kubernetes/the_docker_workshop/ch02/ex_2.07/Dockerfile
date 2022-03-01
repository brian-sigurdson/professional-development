# EXPOSE & HEALTHCHECK example

# TZDATA is requesting geographic location during apache2 installation
# Setting the TZ and DEBIAN_FRONTEND values seem to satisfy it.
ARG TZ="America/New_York"
FROM ubuntu:latest
ENV DEBIAN_FRONTEND="noninteractive"
RUN apt-get update && apt-get install apache2 curl -y
HEALTHCHECK CMD curl -f http://localhost/ || exit 1
EXPOSE 80
CMD ["apache2ctl", "-D", "FOREGROUND"]

