# Nginx - website

### Crear un contenedor con nginx

```
docker run -d --name server-nginx01 nginx:alpine
```

### Ingresar al contenedor

```
docker exec -it server-nginx01 sh
```

### Eliminar el contenedor

```
docker rm -f server-nginx01
```

### Resumiendo a una sola instrucción

```
docker run --rm -it nginx:alpine sh
```

### Agregando un volumen

```
docker run --rm -v $(pwd -W)/vol-configuration:/app -it nginx:alpine sh
```

### Creando el contenedor final

```
docker run -d --name server-nginx01 -p 9000:80 -v $(pwd -W)/html:/app -v $(pwd -W)/configuration/nginx.conf:/etc/nginx/conf.d/default.conf:ro nginx:alpine
```
