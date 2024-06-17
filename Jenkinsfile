pipeline {
    agent { docker 'node:18' }
    environment {
        CI = 'true' 
    }
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
        stage('deploy') {
            steps {
                sh 'echo deplo_path: ${env.DEPLO_PATH}'
            }
        }
    }
}