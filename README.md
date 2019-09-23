# Fatboar-jeu-concours

## Prérequis

- installer docker
- installer docker-compose
- installer git
- cloner le projet fatbor

## How To Work in Dev Environment

La premiere fois :

- Faire 'docker network create web' dans le dossier du projet en local

## Repartir à partir de la branche develop

- git fetch
- Si il y a des modifications en cours sur la branche actuelle, il soit faire le commit soit faire git stash si on ne veut pas garder les modifications en cours
- git checkout develop
- git pull origin develop
- git checkout -b <nom_nouvelle_branche>
- faire le developpement
- git add, git commit, git push origin <nom_nouvelle_branche>

## Mettre à jour la branche develop quand le developpement de la feature est terminé

- Aller sur gogs, sur le projet Fatboar
- Aller dans Pull Request --> New Pull Request
- Base: develop, compare: <nom_nouvelle_branche>
- Assigner la Pull Request à un développeur
- Create Pull Request
- Ensuite le développeur assigné va vérifier le code et valider ou non le merge (en corrigeant les conflits)

Créer un fichier .env à remplir avec les informations d'identification (voir .env-sample)

docker-compose up #prend en compte le fichier override
site web localhost:3000
pg-admin : localhost:8080

Si vous vous installer des modules :

- docker exec -it <nom_du_container> sh
- npm install <nom_du_module>

Arrêter les containers :

- docker-compose stop

Si on veut tout recommencer (supprimer les containers et les images) :

- docker-compose down

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
    -  docker-compose build
    -  docker-compose up -d
CI :
    - docker-compose build --> il faut le Dockerfile
    - docker-compose up -d

En CI on va build avec les Dockerfile, donc on garde la config de prod/stage mais on n'a pas besoin de traefik

table USER
champ role
adresse null quand c'est un responsable
id pays table pays
changelog