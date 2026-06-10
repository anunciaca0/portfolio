#!/usr/bin/env bash
# Deploy do portfólio: build da imagem + update do serviço swarm.
# Uso: ./deploy.sh
set -euo pipefail

IMAGE="anunciacao_meusite:latest"
SERVICE="anunciacao_meusite"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$DIR"

echo "==> Buildando imagem $IMAGE ..."
docker build -t "$IMAGE" .

if docker service ls --format '{{.Name}}' | grep -qx "$SERVICE"; then
  echo "==> Atualizando serviço swarm $SERVICE ..."
  docker service update --image "$IMAGE" --force "$SERVICE"
else
  echo "==> Criando serviço swarm $SERVICE ..."
  docker service create \
    --name "$SERVICE" \
    --network easypanel \
    --replicas 1 \
    --endpoint-mode vip \
    "$IMAGE"
fi

echo "==> Pronto. Site: https://anunciacao-meusite.my1ifo.easypanel.host"
