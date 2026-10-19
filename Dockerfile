# Etapa 1: compila o Tailwind
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY css ./css
COPY src ./src
RUN npx tailwindcss -i ./css/input.css -o ./css/output.css --minify

# Etapa 2: serve os arquivos com nginx
FROM nginx:alpine
COPY --from=build /app/src /usr/share/nginx/html
COPY --from=build /app/css /usr/share/nginx/html/css
EXPOSE 80