# Task

### Crear una red de tipo bridge

```
docker network create net-01 -d bridge
docker network create net-02 -d bridge
```

### Crear contenedores

```
docker run -d --name frontend nginx:alpine
docker run -d --name backend1 nginx:alpine
docker run -d --name backend2 nginx:alpine
docker run -d --name database nginx:alpine
```

### Asignar contenedores a redes

```
docker network connect net-01 frontend
docker network connect net-01 backend1
docker network connect net-02 backend1
docker network connect net-02 backend2
docker network connect net-02 database
```

### Verificar los contenedores asignados a cada red

```
docker network inspect net-01
docker network inspect net-02
```
