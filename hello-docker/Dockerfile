# Use the official Node.js 20 Alpine base image
FROM node:20-alpine
# the above code set the base image to create the image for hello-docker 
# Set the working directory inside the container
WORKDIR /app   
# Copy all files from the current directory to the working directory in the container . first dot means current directory
ENV CHOKIDAR_USEPOLLING=true
# . second dot means the current working directory inside the docker container which is set by the WORKDIR /app instruction
COPY . .
# Specify the command to run the application
CMD node hello.js
