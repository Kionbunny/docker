FROM node:20-alpine3.18

# RUN addgroup app && adduser -S -G app app

# USER app

WORKDIR /app

COPY package*.json ./

RUN npm install
# first (.) Refers to the current directory on the host system (your local machine) where the Docker build command is executed. This is the context of the build process.
COPY . .
# second ( .)  Refers to the current working directory inside the container, as specified by the WORKDIR command in the Dockerfile

EXPOSE 5173

CMD npm run dev