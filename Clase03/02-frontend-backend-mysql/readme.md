# Frontend, Backend, MySQL

### Primer intento de frontend

```
docker run -d --name frontend -p 9000:80 -v $(pwd -W)/frontend:/usr/share/nginx/html nginx:alpine
```

### Crear imagen de backend

```
docker build -t app:1 .
```

### Crear contenedor de backend

```
docker run -d \
    -e DB_HOST=mysql-server \
    -e DB_PORT=3306 \
    -e DB_USER=admin \
    -e DB_PASS=12345 \
    -e DB_NAME=db \
    --name app app:1
```

### Crear una red

```
docker network create net-app -d bridge
```

### Vincular contenedores a la red

```
docker network connect net-app mysql-server
docker network connect net-app frontend
```

### Crear contenedor de backend conectado a la red

```
docker run -d \
    -e DB_HOST=mysql-server \
    -e DB_PORT=3306 \
    -e DB_USER=admin \
    -e DB_PASS=12345 \
    -e DB_NAME=db \
    -e PORT=4000 \
    -p 5000:4000 \
    --network net-app \
    --name app app:1
```
