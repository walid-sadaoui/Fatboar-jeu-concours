pipeline {
    agent any

    environment {
        CI='true'
        NODE_ENV='test'
        POSTGRES_PASSWORD='postgres'
        POSTGRES_USER='postgres'
        POSTGRES_DB='postgres'
        PROJECT_NAME='fatboar-ci'
        JWT_SECRET='fatboar-ci'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh "docker-compose -f docker-compose.yml -f docker-compose.build.yml -p ${PROJECT_NAME} build --no-cache"
                sh "docker-compose -f docker-compose.yml -f docker-compose.build.yml -p ${PROJECT_NAME} up -d"
            }
        }
        stage('Tests') {
            steps {    
                echo 'Performing Unit Tests..'
                sh "docker exec fatboar-back-build npm install"
                sh "docker exec fatboar-back-build npm run ci-test"
                sh "docker cp fatboar-back-build:/usr/src/app/mochawesome-report ." 
            }
            post {
                always {
                    echo 'Generating Test Report'
                    publishHTML target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: 'mochawesome-report',
                        reportFiles: 'mochawesome.html',
                        reportName: 'Tests Report'
                    ]
                }
            }
        }
        stage('Push to registry') {
            steps {
                script {
                    echo 'Push images to private Docker Registry'
                    echo "BRANCHE ${env.BRANCH_NAME}"
                    withDockerRegistry([ credentialsId: "furious-registry", url: "https://registry.fatboar.site" ]) {
                        if (env.BRANCH_NAME == 'develop') {
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
                echo 'Deploying to stage...'
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
                echo 'Deploying to production....'
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
            sh "docker container prune"
            sh "docker image prune -a -f"
            sh "docker container ls"
            sh "docker image ls"
        }
    }
}