FROM nginx:latest
COPY ./dist/CMS /usr/share/nginx/html
EXPOSE 80