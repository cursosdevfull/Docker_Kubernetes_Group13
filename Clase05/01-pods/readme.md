# Pods

### Lista recursos

```
kubectl api-resources
```

### Ejecutar un manifiesto

```
kubectl apply -f <ruta y nombre del manifiesto>
```

### Listar pods

```
kubectl get po
```

### Conectarnos a un pod a través de un puerto

```
kubectl port-forward <nombre pod> <puerto host>:<puerto pod>
```

### Describir un pod

```
kubectl describe po <nombre pod>
```

### Eliminar un pod

```
kubectl delete -f <ruta y nombre del manifiesto>
kubectl delete po <nombre del pod>
```

### Revisar el manifiesto enviado al Api Server

```
kubectl get po <nombre pod> -o yaml
```

### Listar pods con sus etiquetas

```
kubectl get po --show-labels
kubectl get po --show-labels -l app=frontend
```
