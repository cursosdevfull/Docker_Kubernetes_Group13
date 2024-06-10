# Redes

### Crear una red de tipo bridge

```
docker network create <nombre de la red> -d bridge
```

### Crear un contenedor vinculado a una red

```
docker run -d --network <nombre de la red> <nombre imagen>:<version o tag>
```

### Inspeccionar una red

```
docker network inspect <nombre de la red>
```

### Vincular un contenedor a una red existente

```
docker network connect <nombre o id red> <nombre o id del contenedor>
```

### Desvincular un contenedor a una red

```
docker network disconnect <nombre o id red> <nombre o id del contenedor>
```

### Listar redes

```
docker network ls
```

### Crear un contenedor vinculado a una red host

```
docker run -d --network host <nombre o id de la imagen>:<version o tag>
```

### Crear un contenedor vinculado a una red none

```
docker run -d --network none <nombre o id de la imagen>:<version o tag>
```

### Eliminar una red

```
docker network rm <nombre de la red>
docker network rm -f <nombre de la red>
```
