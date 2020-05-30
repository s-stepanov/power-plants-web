pipeline {
   agent any

    environment {
        scmUrl = 'https://github.com/s-stepanov/power-plants-web'
        scmCredsId = 'e9a288b9-f65a-4f70-9580-d14e810b22f1'
        
        dockerImage = ''
        registry = 'sstepanov97/power-plants-backend'
        registryCredsId = 'ab133937-14c4-4f8f-9325-418e51909e93'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/$BRANCH']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [], submoduleCfg: [],
                    userRemoteConfigs: [[credentialsId: scmCredsId, url: scmUrl]]
                ])
            }
        }
        stage('Build Image') {
            steps {
                script {
                    dockerImage = docker.build(registry + ':$BUILD_NUMBER', '-f ./ops-tools/backend/Dockerfile .')
                }      
            }
        }
        stage('Publish Image') {
            steps {
                script {
                    docker.withRegistry('', registryCredsId) {
                        dockerImage.push()
                    }
                }              
            }
        }
        stage('Cleanup After Build') {
            steps {
                sh 'docker rmi sstepanov97/power-plants-backend:$BUILD_NUMBER'
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    build job: 'update-env', parameters: [string(name: 'FRONTEND_TAG', value: ''), string(name: 'BACKEND_TAG', value: "$BUILD_NUMBER")]                         
                }
            }
        }
    }
}

