# React

### Se ejecuta desde la carpeta 03-react

```
docker build -f dockerfile-react -t react:1 ./app-react
docker run -d --name server-react -p 4600:80 react:1
```
