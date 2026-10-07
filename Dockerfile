# Usa o Nginx leve baseado em Alpine Linux como imagem base
FROM nginx:alpine

# Copia todos os arquivos do seu projeto para a pasta pública do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80 do container
EXPOSE 80