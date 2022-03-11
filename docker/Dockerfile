FROM node:12-alpine as build

# RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python3 py3-pip git openssh
RUN npm install --quiet node-gyp -g

# Install the LDWizard-Core bin from git to get latest fix:
WORKDIR /opt
RUN git clone --branch fix-sparql-autocomplete https://github.com/vemonet/LDWizard-Core.git
WORKDIR /opt/LDWizard-Core
RUN yarn
RUN yarn build

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn 
COPY . .
ARG CONFIG_FILE
RUN yarn exec ldwizard-build ${CONFIG_FILE}


FROM nginx:stable-alpine

COPY --from=build /app/lib /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]