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
        stage('Build') {
            steps {
                echo 'Building..'
                // sh 'docker network create web'
                sh 'docker-compose -f docker-compose.yml -f docker-compose.build.yml up --build -d'
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
                    echo 'Push images to Docker Registry'
                    echo 'BRANCHE ${env.BRANCH_NAME}'
                    // echo '${DOCKER_PASSWORD}' | docker login -u '${DOCKER_USERNAME}' --password-stdin registry.fatboar.site

                    if (env.BRANCH_NAME == 'develop') {
                        echo 'BRANCHE ${env.BRANCH_NAME}'
                        sh 'docker container ls'
                        sh 'docker tag node registry.fatboar.site/node:stage'
                    } else if (env.BRANCH_NAME == 'master') {
                        sh 'docker tag node registry.fatboar.site/node:latest'
                        sh 'docker tag registry.fatboar.site/node:latest registry.fatboar.site/node:${VERSION}'
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
            }
        }
    }

    post {
        always {
            sh "docker-compose down -v"
        }
    }
}