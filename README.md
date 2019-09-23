# Fatboar-jeu-concours

- Pouvoir lancer le projet dans un container
- initialiser l'api en créeant la BDD POSTGRES avec NODE

Je fais le code en local, ensuite je dois le mettre sur le serveur

Le docker-compose va contenir les infos pour l'environnement de dev
Le Dockerfile contient les informations pour le serveur de production test

## How To Work in Dev Environment

La premiere fois :

- docker network create web

fichier .env à remplir avec les informations d'identification

docker-compose up #prend en compte le fichier override
site web localhost:3000
pg-admin : localhost:8080

Si vous vous installer des modules :

- docker exec -it <nom_du_container> sh
- npm install <nom_du_module>

Arrêter les containers :

- dcoker-compose down

### Installer dépendances Node

docker-compose exec api sh
npm install : quand je le fais dans le container le package.json est MAJ dans le container ET sur le host
Par contre on ne veut pas le /node_modules qui se remplisse sur le host, pour cela on va utiliser un named volume

CTRL+P CTRL+Q pour se détacher du container sans l'arrêter

## Pour l'environnement de PRODUCTION

On ne doit pas avoir un volume qui relie le code local au code dans le container
exposer un port différent

$ docker-compose build web
$ docker-compose up --no-deps -d web

npm install --production

Il doit correspondre au code présent sur master
Lors du build il faut copier le code de master dans un container lancé sur le serveur.

- git remote add deploy --> docker stack deploy?
- pousser sur origin master --> lancer build jenkins qui s'occupe du deploy sur le server en fonction du nom de la branche

Il y aura un aussi un code pour la PREPROD

- code en local
- Dockerizer l'environnement de dev
- docker-compose exec api sh
- npm install
- CTRL+P CTRL+Q
- Git Hook post-receive
- Jenkinsfile lance build sur ma branche

## Fichiers à envoyer sur le serveur

- /api
- /client
Voir tuto git deploy

## Procédure GIT

git checkout <nom_de_la_branche> (-b si c'est une nouvelle branche)
Si tu travailles sur la même branche que quelqu'un d'autre, avant de commencer à développer fais un git pull

git add .
git commit -m "message"
git push origin <nom_de_la_branche>

## Nouvelle organisation

Dev :
    -  docker-compose -f docker-compose.yml -f docker-compose.dev.yml build
    -  docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
CI :
    - docker-compose build --> il faut le Dockerfile
    - docker-compose up -d

En CI on va build avec les Dockerfile, donc on garde la config de prod/stage mais on n'a pas besoin de traefik

table USER
champ role
adresse null quand c'est un responsable
id pays table pays
changelog