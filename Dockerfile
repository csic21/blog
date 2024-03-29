FROM nginx:alpine
RUN adduser -D -H -u 5000 -s /bin/sh www
RUN rm /etc/nginx/conf.d/default.conf
ADD scripts/nginx.conf /etc/nginx/
ADD scripts/app.conf /etc/nginx/sites-available/
ADD public /var/www
VOLUME /var/www
CMD ["nginx"]

