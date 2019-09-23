# Docker commands

Un container est une instance d'une image Docker

docker images ls ( -a)
docker container ls ( -a)

docker container run -it alpine sh (créé un nouveau container à chaque fois) --rm (supprime when exit)

ctrl + D  :stop the shell
ctrl + P ctrl + Q : detach from container (still running)
docker container attach [name of the container]

docker container start [name of the container] -d (detached mode)
docker container stop [name of the container]

docker container rm [ID of the container]
docker image rm [name of the image]

docker container rm $(docker container ls -aq)

Pour communiquer entre eux les containers doivent être dans le même network

docker network create web
