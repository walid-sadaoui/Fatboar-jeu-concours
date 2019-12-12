# Fatboar-jeu-concours

## Prérequis

    - installer docker
    - installer docker-compose
    - installer git
    - cloner le projet fatboar en local

## Mettre en place son environnement de développement

    - Créer un fichier .env à remplir avec les variables d'environnement présentes dans le fichier .env-sample

### Commencer une nouvelle feature

    - git fetch
    - git checkout develop
    - git pull origin develop
    - Si il y a des modifications en cours sur la branche actuelle, il soit faire le commit soit faire git stash si on ne veut pas garder les modifications en cours
    - git checkout -b "<nom_nouvelle_branche>"
    - faire le developpement
    - git add, git commit, git push origin "<nom_nouvelle_branche>"

### Travailler sur une autre branche

    - Si il y a des modifications en cours sur la branche actuelle, il faut soit faire un commit pour conserver ses modifications soit faire git stash si on ne veut pas garder les modifications en cours
    - git fetch
    - git checkout <autre_branche>
    - git pull origin <autre_branche>
    - faire le developpement
    - git add, git commit, git push origin "<autre_branche>"

### Mettre à jour la branche develop quand le developpement de la feature est terminé

    - Aller sur gogs, sur le projet Fatboar
    - Aller dans Pull Request --> New Pull Request
    - Base: develop, compare: "<nom_nouvelle_branche>"
    - Assigner la Pull Request à un développeur
    - Create Pull Request
    - Ensuite le développeur assigné va vérifier le code et valider ou non le merge (en corrigeant les conflits)

### Lancer l'application en local

    - Remplir le fichier .env
    - Si un Dockerfile a été modifié --> docker-compose build --no-cache
    - docker-compose up (-d)

    site web localhost:3000
    pg-admin : localhost:8080

Si vous voulez installer des modules :

    - cd api/ ou cd client/
    - npm install --save(-dev) "<nom_du_module>"

Arrêter les containers :

    - docker-compose stop

Si on veut tout recommencer (supprimer les containers) :

    - docker-compose down (-v pour supprimer les volumes également)

## Lancer le projet sans DOCKER

Client :

    - cd /client
    - npm install
    - npm start

Api :

    - cd /api
    - avoir postgresql installé sur son pc
    - créer la base de données
    - npm install
    - export NODE_ENV=dev-local
    - npm start:dev

## Installer les dependances

Api:
    - cd api 
    - npm install

Client:
    - cd client
    - npm install

## Modifier Les configurations de la base de données locale
Config:
    dans config modifier le fichier db/config/config.json et remplacer les paramètres par les tiens.

## Lancer les programmes
Api:
    - cd api
    - nodemon app.js

Client:
    - cd client
    - npm start