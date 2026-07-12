#!/bin/sh
set -e

# Auto-seed les volumes bind-mount au tout premier démarrage (dossier hôte
# vide). Sans ça, docker-compose remplace src/data et public/uploads/gallery
# par un dossier hôte vide et masque les données initiales copiées dans
# l'image, cassant getReviews()/getGalleryItems() au premier accès.
# Tourne en root (nécessaire pour chown des points de montage), puis passe
# la main à l'utilisateur non-privilégié "site" pour le process réel.

mkdir -p /app/src/data /app/public/uploads/gallery

if [ ! -f /app/src/data/reviews.json ]; then
  echo "docker-entrypoint: reviews.json absent, seed depuis l'image"
  cp /app/.seed/data/reviews.json /app/src/data/reviews.json
fi

if [ ! -f /app/src/data/gallery.json ]; then
  echo "docker-entrypoint: gallery.json absent, seed depuis l'image"
  cp /app/.seed/data/gallery.json /app/src/data/gallery.json
fi

if [ -z "$(ls -A /app/public/uploads/gallery 2>/dev/null)" ]; then
  echo "docker-entrypoint: public/uploads/gallery vide, seed des photos depuis l'image"
  cp -r /app/.seed/gallery/. /app/public/uploads/gallery/
fi

chown -R site:nodejs /app/src/data /app/public/uploads

exec su-exec site:nodejs "$@"
