 # Stage 1: Build
# FROM node:16-alpine AS build
# # Directorio donde se mantendran los archivos de la app
# WORKDIR /usr/src/app
# # Copiar el package.json y el package-lock en nuestro WORKDIR
# COPY package*.json ./
# # Instalar dependencias
# RUN npm install --force
# # Copiar todos los archivos
# COPY . .
# # Construir la aplicacion lista para produccion, puede no incluir el # flag --prod
# RUN npm run build --prod

# # Stage 2
# FROM nginx:1.17.1-alpine

# # Copiar desde la "Etapa" build el contenido de la carpeta build/
# # dentro del directorio indicado en nginx
# COPY --from=build /app/dist/ang-dockerized-app /usr/share/nginx/html
# # Copiar desde la "Etapa" build el contenido de la carpeta la
# # configuracion de nginx dentro del directorio indicado en nginx
# #COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

#Primera Etapa
FROM node:16-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install --force

COPY . /app

RUN npm run build --prod

#Segunda Etapa
FROM nginx:1.17.1-alpine
	#Si estas utilizando otra aplicacion cambia PokeApp por el nombre de tu app
COPY --from=build-step /app/dist/angular-cajero-virtual /usr/share/nginx/html

