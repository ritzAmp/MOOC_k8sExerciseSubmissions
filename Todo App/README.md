# Exercise 1.2

### Build the docker image from the Dockerfile and publish it to docker hub
`docker build -t ritzamp/todoapp:1.2 . --push`   
    Docker image is available[here](https://hub.docker.com/repository/docker/ritzamp/todoapp/general)   
  
### Create cluster  
`k3d cluster create -a 2`   

### Create deployment  
`kubectl create deployment port-output --image=ritzamp/todoapp:1.2`  

### Get pod name  
`kubectl get pods`  
  In this instance the pod name is *port-output-7c69dc8c79-rl24x*   
  
### See the output  
`kubectl logs port-output-7c69dc8c79-rl24x`  

Output    
```
> simple-server@1.0.0 start
> node index.js

Server started in port 8080
```

