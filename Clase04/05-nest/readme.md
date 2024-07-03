# NestJS

### Se ejecuta desde la carpeta 05-nest

```
docker build -f Dockerfile -t nestjs:1 ./app-simple
docker run -d --name server-nest -p 4800:3000 nestjs:1
```
