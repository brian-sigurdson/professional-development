# the docker workshop 
# ch 2 activity

# TZDATA is requesting geographic location during apache2 installation
# Setting the TZ and DEBIAN_FRONTEND values seem to satisfy it.
ARG TZ="America/New_York"
FROM ubuntu:latest
ENV DEBIAN_FRONTEND="noninteractive"
RUN apt-get update && apt-get install apache2 php curl -y
COPY welcome.php /var/www/html
WORKDIR /var/www/html
HEALTHCHECK --interval=5s --timeout=3s --retries=3 CMD curl -f http://localhost || exit 1
EXPOSE 80
ENTRYPOINT ["apache2ctl", "-D", "FOREGROUND"]

