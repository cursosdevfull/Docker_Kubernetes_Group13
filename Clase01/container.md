# Container

### Crear un contendor

```
docker create <nombre o id de la imagen>:<versión o tag>
docker create --name <nombre contenedor> <nombre o id de la imagen>:<versión o tag>
```

### Listar contenedores

```
docker ps
```

### Listar contenedores que se estén ejecutándo o no

```
docker ps -a
```

### Para iniciar un contenedor

```
docker start <nombre o id del contenedor>
```

### Para detener un contenedor

```
docker stop <nombre o id del contenedor>
```

### Para eliminar un contenedor

```
docker rm <nombre o id del contenedor>
docker rm -f <nombre o id del contenedor>
```

### Para mapear puertos entre host y contenedor

```
docker run -p <puerto host>:<puerto contenedor> <nombre o id imagen>:<versión o tag>
docker run -p <puerto host1>:<puerto contenedor1> -p <puerto host2>:<puerto contenedor2> <nombre o id imagen>:<versión o tag>
```

### Para crear un contenedor con nombre

```
docker run --name <nombre contenedor> -p <puerto host>:<puerto contenedor> <nombre o id imagen>:<versión o tag>
```

### Para crear un contenedor sin estar vinculado

```
docker run -d --name <nombre contenedor> -p <puerto host>:<puerto contenedor> <nombre o id imagen>:<versión o tag>
```
