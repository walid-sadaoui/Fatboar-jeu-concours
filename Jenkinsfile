pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                // docker-compose up --build -d
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            when {
                branch master
            }
            steps {
                echo 'Deploying....'
                echo 'Si branch stage : si test pass --> deploy stage.fatboar.site'
                echo 'Si branch master : si test pass --> deploy fatboar.site'
            }
        }
    }
}