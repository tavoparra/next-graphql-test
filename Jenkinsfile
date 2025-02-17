pipeline {
    agent any

    environment {
        NODE_VERSION = '18'  // Ajusta según la versión de Node.js de tu proyecto
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'git@github.com:tavoparra/next-graphql-test.git'
            }
        }

        stage('Setup Node.js') {
            steps {
                script {
                    def nodeHome = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Next.js App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to AWS') {
            steps {
                sh './scripts/deploy.sh'
            }
        }
    }
}
