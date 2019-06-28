FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /app

COPY start.sh .

ENV NODE_SERVICE_URI=${NODE_SERVICE_URI:-localhost}
ENV NODE_SERVICE_PORT=${NODE_SERVICE_PORT:-3000}

CMD ["sh", "start.sh"]

