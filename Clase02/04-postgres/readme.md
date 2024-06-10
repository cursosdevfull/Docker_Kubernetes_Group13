# Postgres

### Crear un contenedor

```
docker run -d --name postgres-server -e POSTGRES_PASSWORD=12345 postgres:alpine
```

### Crear un cliente de postgres

```
docker run -d --name postgres-client -p 5000:80 -e PGADMIN_DEFAULT_EMAIL=sergiohidalgocaceres@gmail.com -e PGADMIN_DEFAULT_PASSWORD=54321 dpage/pgadmin4:8
```
