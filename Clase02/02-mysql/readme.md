# MySQL

### Crear contenedor

```
docker run -d --name mysql-server -p 4000:3306 mysql:8
```

### Crear contenedor usando variables de entorno

```
docker run -d --name mysql-server -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=db -e MYSQL_USER=admin -e MYSQL_PASSWORD=12345 -p 4000:3306 mysql:8
```

### Crear contenedor usando variables de entorno desde un archivo externo

```
docker run -d --name mysql-server --env-file=variables.txt -p 4000:3306 mysql:8
```

### Crear un contenedor cliente de MySQL

```
docker run -d --name mysql-client -p 8080:80 -e PMA_ARBITRARY=1 phpmyadmin:5.2.1
```
