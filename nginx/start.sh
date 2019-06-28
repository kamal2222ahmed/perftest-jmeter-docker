#!/bin/sh

# Write environment variables to nginx configuration file
envsubst '$NODE_SERVICE_URI $NODE_SERVICE_PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf

# Ask nginx to not run in daemon mode
nginx -g "daemon off;"