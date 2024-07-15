# Usuarios

### Copiar

- Copiar el certificado y la llave privada (crt, key) la carpeta de kubernetes
- Ubicarse en la carpeta de kubernetes (.kube)

### Crear el usuario

```
kubectl config set-credentials curso13 --client-certificate=curso13.crt --client-key=curso13.key
```
