Sample commands showing multistage builds
=========================================

Sample project taken from: https://github.com/dharmeshkakadia/go-multi-stage-docker

```
# build
docker build -f Dockerfile -t go-multi-stage-docker:latest .

# check image size
docker image ls go-multi-stage-docker

# run
docker run --rm go-multi-stage-docker
```
