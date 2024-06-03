# Images

### Listar imágenes

```
docker images
```

### Filtrar un listado

```
docker images | grep hello
```

### Inspeccionar una imagen

```
docker image inspect <nombre imagen | id imagen>:<version o tag de la imagen>
```

### Descargar una imagen

```
docker pull <nombre imagen>:<versión o tag>
docker pull <url del repositorio>/<nombre imagen>:<versión o tag>
```

### Eliminar una imagen

```
docker rmi nginx:alpine
docker rmi -f nginx:alpine
```
