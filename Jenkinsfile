pipeline {
    agent any

    environment {
        CI='true'
        NODE_ENV='CI'
        PORT=3000
        VERSION='0.0.1'
        POSTGRES_PASSWORD='postgres'
        POSTGRES_USER='postgres'
        POSTGRES_DB='postgres'
        // 1 - il faut lancer les containers docker (lesquels?)
        // 2 - lancer les tests 
        // 3 - taguer les images docker
        // 4 - pousser les images dans le regstry
        // 5 - déployer sur le bon environnement
        // 6 - nettoyer l'environnement
    }
    stages {
        stage('Informations') {
            steps {
                echo 'Hostname of the jenkins container'
                sh 'hostname'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                // sh 'docker network create web'
                sh 'docker-compose -f docker-compose.yml -f docker-compose.build.yml build --no-cache'
                sh 'docker-compose -f docker-compose.yml -f docker-compose.build.yml up -d'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Push to registry') {
            steps {
                script {
                    echo 'Push images to private Docker Registry'
                    echo "BRANCHE ${env.BRANCH_NAME}"
                    // echo '${DOCKER_PASSWORD}' | docker login -u '${DOCKER_USERNAME}' --password-stdin registry.fatboar.site

                    if (env.BRANCH_NAME == 'develop') {
                        echo 'BRANCHE ${env.BRANCH_NAME}'
                        sh 'docker container ls'
                        sh 'docker tag fatboar-back registry.fatboar.site/fatboar-back:latest'
                    } else if (env.BRANCH_NAME == 'master') {
                        sh 'docker tag fatboar-back registry.fatboar.site/node:prod'
                        // sh 'docker tag registry.fatboar.site/node:latest registry.fatboar.site/node:${VERSION}'
                    }
                    
                    // docker push node registry.fatboar.site/node:${VERSION}
                    // docker push node registry.fatboar.site/node:latest
                }
            }
        }
        stage('Deploy to Stage') {
            when {
                branch 'develop'
            }
            steps {
                echo 'Deploying....'
                echo 'Si les tests passent, en fonction de la branche on va envoyer vers le bon serveur'
                echo 'Si branch stage : si test pass --> deploy stage.fatboar.site'
                echo 'Si branch master : si test pass --> deploy fatboar.site'
                echo 'docker pull registry.fatboar.site/node:stage'
                echo 'on copie le docker-compose vers /opt/web/Fatboar-jeu-concours-stage'
                echo 'les volumes pour les bdd se trouvent dans /var/lib/Fatboar-jeu-concours-stage-db'
            }
        }
        stage('Deploy to Production') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploying....'
                echo 'Si les tests passent, en fonction de la branche on va envoyer vers le bon serveur'
                echo 'Si branch stage : si test pass --> deploy stage.fatboar.site'
                echo 'Si branch master : si test pass --> deploy fatboar.site'
                echo 'on copie le docker-compose vers /opt/web/Fatboar-jeu-concours'
                echo 'les volumes pour les bdd se trouvent dans /var/lib/Fatboar-jeu-concours-db'
                // ssh dans le dossier Fatboar-jeu-concours, créer .env-stage, .env-prod
                // sur master deploy.sh, sur develop deliver-for-stage.sh
                // .env-stage/prod --> .env (doit contenir COMPOSE_PROJECT_NAME)
                // docker-compose down -v
                // docker-compose build --no-cache et docker-compose -f docker-compose.yml -f docker-compose.deploy.yml up -d
            }
        }
    }

    post {
        always {
            sh "docker container ls"
            sh "docker image ls"
            sh "docker-compose down -v"
            sh "docker container ls"
            sh "docker image ls"
        }
    }
}