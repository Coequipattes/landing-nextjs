# DEPLOY TODO — à faire avant le prochain déploiement VPS

Le passage en monorepo (`apps/web` + `packages/ui`) a **déplacé l'app** dans `apps/web/`.
Les fichiers de déploiement **n'ont volontairement PAS été touchés** — à mettre à jour toi-même :

## `Dockerfile`
- Le build root (`pnpm build`) marche toujours (le `package.json` racine délègue à `--filter web`).
- Mais `output: standalone` + `outputFileTracingRoot` (racine monorepo) change la structure de sortie :
  - `.next/standalone` est désormais sous `apps/web/.next/standalone/`
  - à l'intérieur, `server.js` se trouve sous `apps/web/server.js` (l'arbo du monorepo est reproduite)
  - le `node_modules` hoisté est à la racine du standalone
- COPY à revoir :
  - `COPY --from=builder /app/apps/web/public ./apps/web/public`
  - `COPY --from=builder /app/apps/web/.next/standalone ./`
  - `COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static`
  - `COPY --from=builder /app/apps/web/src/data ./apps/web/src/data`
  - `CMD ["node", "apps/web/server.js"]`

## `docker-compose.yml`
- Volumes à repointer :
  - `.../data:/app/src/data` → `.../data:/app/apps/web/src/data`
  - `.../gallery:/app/public/uploads/gallery` → `.../gallery:/app/apps/web/public/uploads/gallery`
- Le cron (`http://web:3000/api/admin/reviews`) reste inchangé.

## `.env.local`
- Déplacé de la racine vers `apps/web/.env.local` (Next lit l'env dans le cwd de l'app).
- `docker-compose.yml` fait `env_file: - .env.local` (résolu à la racine) → soit garder une copie à la racine pour compose, soit repointer `env_file: - apps/web/.env.local`.

## `.dockerignore`
- Ajouter `apps/*/.next` et `packages/*/dist` si besoin.

> Vérifie avec un build image local (`docker compose build web`) avant de pousser en prod.
