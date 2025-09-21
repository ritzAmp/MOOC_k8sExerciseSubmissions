# Exercise 1.3

### Create cluster  
`k3d cluster create -a 2`   

### Create deployment using the deployment files from remote location
`kubectl apply -f https://raw.githubusercontent.com/ritzAmp/MOOC_k8sExerciseSubmissions/refs/heads/main/Log%20Output/manifests/deployment.yaml`  

### Get pod name  
`kubectl get pods`  
  In this instance the pod name is *log-output-deployment-55794bc7f9-d85wc*   
  
### See the output  
`kubectl logs -f log-output-deployment-55794bc7f9-d85wc`  

Output sample  
```
2025-09-21T19:08:20.738Z: d894ee01-598f-4489-ac21-68ea301d0eb8
2025-09-21T19:08:25.744Z: 49f60fe5-d20f-45e9-9a93-e32808ff29e6
2025-09-21T19:08:30.750Z: 43309c44-6d3b-4e2c-887b-543bd0f25ffa
2025-09-21T19:08:35.757Z: a9340c21-2064-4de8-b838-92e9f6aed68b
2025-09-21T19:08:40.764Z: 420db0e7-c3cf-4709-aeaf-9112004e6921
2025-09-21T19:08:45.772Z: 0e5a7852-5189-458a-8441-3dc0da40e8f6
2025-09-21T19:08:50.773Z: 1cec58f0-21bd-4e00-82c1-5fa8adda1265
```


