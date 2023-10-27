# stage 1
FROM node:21-alpine AS builder

WORKDIR /app   
# create folder app in container and set it as working directory

COPY package.json .
# copy package.json from current folder to container folder

COPY yarn.lock .
# copy yarn.lock from current folder to container folder

COPY . . 
# copy all files from current folder to container folder

RUN yarn install && yarn build

# ENV REACT_APP_PORT=3001

EXPOSE 4000

CMD [ "yarn", "start" ]
# install all dependencies and build project

# stage 2
# FROM nginx:1.25.3-alpine AS runner

# WORKDIR /usr/share/nginx/html
# # set working directory

# RUN rm -rf ./*
# # remove all files from working directory

# COPY --from=builder /app/build .

# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

# COPY . .
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# EXPOSE 3000
# CMD ["yarn", "start"]

# VOLUME ["/app"]



