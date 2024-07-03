FROM node:20-alpine as build
WORKDIR /app

COPY appSimple/package*.json .

RUN npm install

COPY appSimple .

RUN npm run build

FROM nginx:alpine as production

COPY --from=build /app/dist/app-simple/browser /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

