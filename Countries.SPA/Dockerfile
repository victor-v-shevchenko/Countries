FROM node:16-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY Countries.SPA/package.json ./
COPY Countries.SPA/package-lock.json ./
RUN npm ci --silent
COPY Countries.SPA ./
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
