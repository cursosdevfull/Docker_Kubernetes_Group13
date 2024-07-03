# Vue

### Se ejecuta desde la carpeta 04-vue

```
docker build -f dockerfile/dockerfile-vue -t vue:1 --build-arg DIR=app-vue .
docker run -d --name server-vue -p 4700:80 vue:1
```
