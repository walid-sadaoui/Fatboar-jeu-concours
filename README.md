# Fatboar-jeu-concours

- Pouvoir lancer le projet dans un container
- initialiser l'api en créeant la BDD POSTGRES avec NODE

Je fais e code en local, ensuite je dois le mettre sur le serveur

Le docker-compose va contenir les infos pour l'environnement de dev
Le Dockerfile contient les informations pour le serveur de production

## Config GIT

- créer dossier du projet
- git init
- git checkout / git remote add
- ajoute ton code react dans le dossier client/

## How To Work in Dev Environment

Créer un script pour lancer docker-compose en fonction :
  docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
  docker-compose -f docker-compose -f docker-compose.prod up -d
  docker stack deploy

pg-admin : localhost:8080

### Installer dépendances Node

docker-compose exec api sh
npm install

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
