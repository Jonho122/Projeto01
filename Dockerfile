# Etapa 1: compila o Tailwind
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src ./src
RUN npx tailwindcss -i ./src/input.css -o ./src/output.css --minify

# Etapa 2: serve os arquivos com nginx
FROM nginx:alpine
COPY --from=build /app/src /usr/share/nginx/html
EXPOSE 80