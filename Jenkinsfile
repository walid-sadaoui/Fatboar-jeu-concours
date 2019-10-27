pipeline {
    agent any

    environment {
        CI='true'
        NODE_ENV='test'
        POSTGRES_PASSWORD='postgres'
        POSTGRES_USER='postgres'
        POSTGRES_DB='postgres'
        PROJECT_NAME='fatboar-ci'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh "docker-compose -f docker-compose.yml -f docker-compose.build.yml -p ${PROJECT_NAME} build --no-cache"
                sh "docker-compose -f docker-compose.yml -f docker-compose.build.yml -p ${PROJECT_NAME} up -d"
                // Faire un multistage build pour ne conserver que les fichiers necessaires dans l'image docker
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                echo 'Run tests with Docker'
            }
        }
        stage('Push to registry') {
            steps {
                script {
                    echo 'Push images to private Docker Registry'
                    echo "BRANCHE ${env.BRANCH_NAME}"
                    withDockerRegistry([ credentialsId: "furious-registry", url: "https://registry.fatboar.site" ]) {
                        echo 'Je suis dans le Docker REGISTRY'
                        if (env.BRANCH_NAME == 'develop') {
                            echo "BRANCHE ${env.BRANCH_NAME}"
                            sh 'docker container ls -a'
                            sh 'docker tag fatboar-back_build registry.fatboar.site/fatboar-back:latest'
                            sh 'docker push registry.fatboar.site/fatboar-back:latest'
                            sh 'docker tag fatboar-front_build registry.fatboar.site/fatboar-front:latest'
                            sh 'docker push registry.fatboar.site/fatboar-front:latest'
                        } else if (env.BRANCH_NAME == 'master') {
                            sh 'docker tag fatboar-back_build registry.fatboar.site/fatboar-back:prod'
                            sh 'docker push registry.fatboar.site/fatboar-back:prod'
                            sh 'docker tag fatboar-front_build registry.fatboar.site/fatboar-front:prod'
                            sh 'docker push registry.fatboar.site/fatboar-front:prod'
                        }
                    }
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
                echo 'docker pull registry.fatboar.site/node:stage'
                echo 'on copie le docker-compose vers /opt/web/Fatboar-jeu-concours-stage'
                echo 'les volumes pour les bdd se trouvent dans /var/lib/Fatboar-jeu-concours-stage-db'
                sshPublisher(
                   continueOnError: false, failOnError: true,
                   publishers: [
                    sshPublisherDesc(
                     configName: 'fatboar-server',
                     verbose: true,
                     transfers: [
                      sshTransfer(
                        remoteDirectory: "/fatboar",
                        execCommand: "cd /srv/fatboar && ./run-stage.sh"
                        ),
                    ])
                ])
            }
        }
        stage('Deploy to Production') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploying....'
                echo 'Si les tests passent, en fonction de la branche on va envoyer vers le bon serveur'
                echo 'Si branch master : si test pass --> deploy fatboar.site'
                echo 'on copie le docker-compose vers /opt/web/Fatboar-jeu-concours'
                echo 'les volumes pour les bdd se trouvent dans /var/lib/Fatboar-jeu-concours-db'
                sshPublisher(
                   continueOnError: false, failOnError: true,
                   publishers: [
                    sshPublisherDesc(
                     configName: 'fatboar-server',
                     verbose: true,
                     transfers: [
                      sshTransfer(
                        remoteDirectory: "/fatboar",
                        execCommand: "cd /srv/fatboar && ./run-prod.sh"
                        ),
                    ])
                ])
            }
        }
    }

    post {
        always {
            sh "docker container ls"
            sh "docker image ls"
            sh "docker-compose -f docker-compose.yml -f docker-compose.build.yml -p ${PROJECT_NAME} down"
            sh "docker image prune -f"
            sh "docker container ls"
            sh "docker image ls"
        }
    }
}