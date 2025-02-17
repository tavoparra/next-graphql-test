#!/bin/bash

set -e  # Detiene el script si hay un error

echo "🚀 Deploying Next.js app to AWS..."

# Variables de configuración (ajusta según tu configuración en AWS)
AWS_BUCKET="s3://next-graphql-test"

# Configuración de AWS CLI (Asegúrate de que Jenkins tenga acceso con IAM)
aws configure set region us-east-1  # Ajusta según tu región

# Subir archivos a S3 (si es un sitio estático)
aws s3 sync out/ $AWS_BUCKET --delete


echo "✅ Deploy completo."
