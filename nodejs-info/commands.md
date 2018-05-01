Sample commands illustrating basic docker usage
===============================================

```
# build container
docker build -t docker-sample-nodejs-info .

# run. detach. map exposed port to host port.
docker run -p 8080:8080 -d docker-sample-nodejs-info:latest

# list running/all containers
docker ps
docker ps -a

# log output
docker logs <container_id>

# stop container
docker stop <container_id>

# stop all container based on image docker-sample-nodejs-info
docker stop $(docker ps -q --filter ancestor=docker-sample-nodejs-info)

# remove single container
docker rm <container_id>

# remove containers based on image docker-sample-nodejs-info
docker rm $(docker ps -aq --filter ancestor=docker-sample-nodejs-info)

# remove image
docker rmi docker-sample-nodejs-info:latest
```
