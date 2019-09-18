pipeline {
    agent docker

    environment {
        CI='true'
        NODE_ENV='CI'
        PORT=3000
        VERSION=0.0.1
        POSTGRES_PASSWORD='postgres'
        POSTGRES_USER='postgres'
        POSTGRES_DB='postgres'
        // variables d'environnemet pour traefik?
        //checkout git
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
                sh 'docker network create web'
                sh 'docker-compose -f docker-compose.yml -f docker-compose.build.yml up --build -d'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Push to registry') {
            echo 'Push images to Docker Registry'
            docker tag node registry.fatboar.site/node:latest
            docker tag node registry.fatboar.site/node:${VERSION}
            // docker push node registry.fatboar.site/node:${VERSION}
            // docker push node registry.fatboar.site/node:latest
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