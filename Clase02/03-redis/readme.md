# Redis

### Crear contenedor sin password

```
docker run -d --name redis-server -p 6379:6379 redis:alpine
```

### Crear contenedor con password

```
docker run -d --name redis-server -p 6379:6379 redis:alpine redis-server --requirepass todovale
```

### Crear contenedor cliente de Redis

```
docker run -d --name redis-client -p 8081:8081 -e REDIS_HOST=172.17.0.5 -e REDIS_PASSWORD=todovale rediscommander/redis-commander
```
