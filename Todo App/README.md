# Exercise 1.4

### Create cluster  
`k3d cluster create -a 2`   

### Create deployment using the deployment files from remote location 
`kubectl apply -f https://raw.githubusercontent.com/ritzAmp/MOOC_k8sExerciseSubmissions/refs/heads/main/Todo%20App/manifests/deployment.yaml`   

### Get pod name  
`kubectl get pods`  
  In this instance the pod name is *todoapp-dep-58dc4d695-mzbjx*   
  
### See the output  
`kubectl logs todoapp-dep-58dc4d695-mzbjx`  

Output    
```
> simple-server@1.0.0 start
> node index.js

Server started in port 8080
```

