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
                echo 'deploy_path: ${env.DEPLOY_PATH}'
            }
        }
    }
}