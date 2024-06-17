pipeline {
    agent { docker 'node:18' }
    stages {
        stage('build') {
            steps {
                sh 'echo "Building..."'
                sh 'npm --version'
            }
        }
    }
}