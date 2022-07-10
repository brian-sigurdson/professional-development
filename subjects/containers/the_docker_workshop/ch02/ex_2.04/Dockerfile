# workdir, copy, add example
FROM ubuntu:latest
RUN apt-get update && apt-get install apache2 -y
WORKDIR /var/www/html/
COPY index.html .
ADD https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png ./logo.png
CMD ["ls"]