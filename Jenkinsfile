pipeline {
    agent any

    stages {

        stage('Build Image') {
            steps {
                sh 'docker build -t express-app .'
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                docker run --rm \
                    express-app \
                    npm test
                '''
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