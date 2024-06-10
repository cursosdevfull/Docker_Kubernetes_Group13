# Volumen

## Host

### Crear volumen de tipo host

```
docker run -d --name nginx-server -p 9000:80 -v D:\\Cursos\\Docker_Kubernetes_Group13\\Clase02\\vol-nginx:/usr/share/nginx/html nginx:alpine
```

### En Git Bash

```
docker run -d --name nginx-server -p 9000:80 -v $(pwd -W)/vol-nginx:/usr/share/nginx/html nginx:alpine
```

### En Bash (Linux)

```
docker run -d --name nginx-server -p 9000:80 -v $(pwd)/vol-nginx:/usr/share/nginx/html nginx:alpine
```

### En Powershell

```
docker run -d --name nginx-server -p 9000:80 -v ${PWD}/vol-nginx:/usr/share/nginx/html nginx:alpine
```

## Nombrado

### Crear volumen

```
docker volume create <nombre volumen>
docker volume create vol-nginx-server
```

### Crear contenedor con volumen nombrado

```
docker run -d --name nginx-server -p 9000:80 -v vol-nginx-server:/usr/share/nginx/html nginx:alpine
```

### Listar volúmenes

```
docker volume ls
```

### Inspeccionar volúmen

```
docker volume inspect vol-nginx-server
```

### Eliminar volúmen

```
docker volume rm <nombre volumen>
```

## Anónimo

### Crear volumen anónimo

```
docker run -d --name nginx-server -p 9000:80 -v /usr/share/nginx/html nginx:alpine
```

### Eliminar contenedor con volumen anónimo

```
docker rm -f nginx-server
docker rm -fv nginx-server
```
