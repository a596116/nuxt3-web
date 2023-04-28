FROM nginx

WORKDIR /usr/share/nginx/html/
USER root

# 作者
MAINTAINER haodai

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist  /usr/share/nginx/html/

COPY ssl.crt /etc/nginx/
COPY ssl.key /etc/nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
