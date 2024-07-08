FROM ubuntu:24.04

RUN apt-get update -y && apt-get install apache2 -y

COPY ./html /var/www/html

CMD ["apachectl", "-D", "FOREGROUND"]