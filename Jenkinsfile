pipeline {
    agent { docker 'node:18' }
    stages {
        stage('install') {
            steps {
                sh 'npm ci'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}