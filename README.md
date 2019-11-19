# Fatboar-jeu-concours

## Prérequis

    - installer docker
    - installer docker-compose
    - installer git
    - cloner le projet fatboar

## Mettre en place son environnement de développement

La premiere fois :

    - Faire 'docker network create web' dans le dossier du projet en local

### Repartir à partir de la branche develop

    - git fetch
    - Si il y a des modifications en cours sur la branche actuelle, il soit faire le commit soit faire git stash si on ne veut pas garder les modifications en cours
    - git checkout develop
    - git pull origin develop
    - git checkout -b "<nom_nouvelle_branche>"
    - faire le developpement
    - git add, git commit, git push origin "<nom_nouvelle_branche>"

### Mettre à jour la branche develop quand le developpement de la feature est terminé

    - Aller sur gogs, sur le projet Fatboar
    - Aller dans Pull Request --> New Pull Request
    - Base: develop, compare: "<nom_nouvelle_branche>"
    - Assigner la Pull Request à un développeur
    - Create Pull Request
    - Ensuite le développeur assigné va vérifier le code et valider ou non le merge (en corrigeant les conflits)

    - Créer un fichier .env à remplir avec les informations d'identification (voir .env-sample)

    docker-compose up #prend en compte le fichier override
    site web localhost:3000
    pg-admin : localhost:8080

Si vous voulez installer des modules :

    - cd api/ ou cd client/
    - npm install --save(-dev) "<nom_du_module>"

Arrêter les containers :

    - docker-compose stop

Si on veut tout recommencer (supprimer les containers) :

    - docker-compose down (-v pour supprimer les volumes également)

## Procédure GIT

Récupérer la branche de travail :

    - git checkout <nom_de_la_branche> (-b si c'est une nouvelle branche)
    - git pull

Envoyer ses modifications :

    - git add .
    - git commit -m "message" ou npx git-cz
    - git push origin <nom_de_la_branche>

## Lancer le projet sans DOCKER

Client :

    - cd /client
    - npm install
    - npm start

Api :

    - cd /api
    - npm install
    - export NODE_ENV=dev-local
    - npm start:dev
