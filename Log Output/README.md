# Exercise 1.1

### Build the docker image from the Dockerfile
`docker build -t ritzamp/random-string-generator .`  
    Docker image can be found [here](https://hub.docker.com/repository/docker/ritzamp/random-string-generator/general)   
  
### Create cluster  
`k3d cluster create -a 2`   

### Create deployment  
`kubectl create deployment random-string-generator --image=ritzamp/random-string-generator`  

### Get pod name  
`kubectl get pods`  
  In this instance the pod name is *random-string-generator-7f966fc546-q72xf*   
  
### See the output  
`kubectl logs -f random-string-generator-7f966fc546-q72xf`  

Output sample  
```
2025-09-19T11:14:05.968Z: b6c10246-11f9-410c-98c1-4ef82ea91f44
2025-09-19T11:14:10.978Z: 296588c9-cd41-41bd-910b-b0c6129dc9ec
2025-09-19T11:14:15.988Z: 6803cec2-d009-4478-ae31-e7dcb7fb4b02
2025-09-19T11:14:20.989Z: 3cb93a86-488e-4899-a3ef-d97338e8cb8d
2025-09-19T11:14:25.996Z: a42f909c-e4ef-450b-bec7-b9a6db7e8c1a
```


