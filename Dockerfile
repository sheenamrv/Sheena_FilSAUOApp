#First Stage - To build the image

#Select parent image
FROM node:latest as node

#Set working directory 
WORKDIR /app

#Copy current 
COPY . .

#Install dependencies
RUN npm install

#Build app
RUN npm run build --prod

#Second Stage
FROM nginx:latest

COPY --from=node /app/dist/* /usr/share/nginx/html

