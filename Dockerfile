FROM nginx
RUN mkdir -p /usr/share/nginx/html/microservice
RUN mkdir -p /usr/share/nginx/html/springhibernate
COPY bp-main /usr/share/nginx/html
COPY bp-microservice/build /usr/share/nginx/html/microservice
COPY bp-springhibernate/build /usr/share/nginx/html/springhibernate
