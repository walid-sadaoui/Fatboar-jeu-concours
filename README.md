# Fatboar-jeu-concours

- Pouvoir lancer le projet dans un container
- initialiser l'api en créeant la BDD POSTGRES avec NODE

Je fais e code en local, ensuite je dois le mettre sur le serveur

Le docker-compose va contenir les infos pour l'environnement de dev
Le Dockerfile contient les informations pour le serveur de production

## How To Work in Dev Environment

docker-compose up -d

pg-admin : localhost:8080

### Installer dépendances Node

docker-compose exec api sh
npm install

CTRL+P CTRL+Q pour se détacher du container sans l'arrêter

## Pour l'environnement de PRODUCTION

Il doit correspondre au code présent sur master
Lors du build il faut copier le code de master dans un container lancé sur le serveur.

Il y aura un aussi un code pour la PREPROD

- code en local
- Dockerizer l'environnement de dev
- docker-compose exec api sh
- npm install
- CTRL+P CTRL+Q
- Git Hook post-receive
- Jenkinsfile lance build sur ma branche
