# Design — Rafraîchissement automatique des avis Google

**Date** : 2026-04-06
**Statut** : Approuvé

## Contexte

L'infrastructure pour récupérer les avis Google est déjà en place :

- `src/lib/google-reviews.ts` — fetch Google Places API, sauvegarde dans `src/data/reviews.json`, préserve la visibilité
- `src/app/api/admin/reviews/route.ts` — endpoint `GET` sécurisé par `Authorization: Bearer $CRON_SECRET` qui déclenche le refresh
- `.env.example` — `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`, `CRON_SECRET` déjà prévus

Il manque uniquement le mécanisme qui appelle l'endpoint automatiquement.

## Décision

Ajout d'un **service cron dans docker-compose.yml**. Approche choisie car :
- Tout reste dans le repo (portable si migration serveur)
- Utilise le réseau Docker interne (pas de dépendance à l'URL publique)
- Aucun changement au code Next.js

## Architecture

```
docker-compose.yml
  web (Next.js, port 3000)
  cron (alpine + curl)
    └─ toutes les nuits à 3h → GET http://web:3000/api/admin/reviews
                               Authorization: Bearer $CRON_SECRET
```

Le container `cron` :
- Image : `alpine` (minimaliste)
- Installe `curl` au démarrage
- Exécute un script shell qui appelle l'endpoint et log le résultat
- Planifié via `crond` natif d'Alpine

## Fichiers modifiés

| Fichier | Changement |
|---------|-----------|
| `docker-compose.yml` | Ajout du service `cron` avec script inline |

## Gestion des erreurs

- Le résultat du `curl` (code HTTP + corps de réponse) est loggué dans stdout
- Visible via `docker compose logs cron`
- Pas de retry automatique — si Google est indisponible, le refresh se fera le lendemain
- Pas d'alerting (peut être ajouté ultérieurement)

## Variables d'environnement requises

| Variable | Description |
|----------|-------------|
| `CRON_SECRET` | Secret partagé entre le cron et l'endpoint Next.js |

`GOOGLE_PLACES_API_KEY` et `GOOGLE_PLACE_ID` sont lus par Next.js, pas par le container cron.

## Hors périmètre

- Retry en cas d'échec
- Alerting/notification
- Changement de fréquence (ajustable dans le crontab du service)
