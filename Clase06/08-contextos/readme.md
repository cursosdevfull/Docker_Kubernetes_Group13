# Contextos

### Contexto actual

```
kubectl config current-context
```

### Ver configuración de contextos y usuarios

```
kubectl config view
```

### Crear contexto

```
kubectl config set-context curso13-ctx --cluster=docker-desktop --user=curso13
```

### Cambiar de contexto

```
kubectl config use-context curso13-ctx
```
