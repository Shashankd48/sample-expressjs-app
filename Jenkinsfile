pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t express-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker rm -f express-app || true

                docker run -d \
                    --name express-app \
                    -p 3000:5173 \
                    express-app
                '''
            }
        }
    }
}