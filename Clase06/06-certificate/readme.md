# Certificados

### Crear la llave privada

```
openssl genrsa -out curso13.key 2048
```

### Crear la solicitud

```
openssl req -new -key curso13.key -out curso13.csr -subj "/CN=curso13/O=developers"
```

### Crear el certificado final

```
openssl x509 -req -in curso13.csr -CA \\wsl.localhost\docker-desktop-data\data\kubeadm\pki\ca.crt -CAkey \\wsl.localhost\docker-desktop-data\data\kubeadm\pki\ca.key -CAcreateserial -out curso13.crt -days 365
```
