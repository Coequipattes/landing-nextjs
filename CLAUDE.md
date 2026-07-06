# Co'équi'pattes — landing (monorepo)

> Décisions structurantes du projet. **À tenir à jour à chaque décision durable.**

## Architecture
- Monorepo pnpm : `apps/web` (**TanStack Start**, React 19, Vite 8, Tailwind v4, file-router) + `packages/ui` (`@coequipattes/ui`, design system).
- **Design system = shadcn/ui.** Tokens = source unique dans `packages/ui/src/styles/globals.css` ; `apps/web/src/styles.css` importe `@coequipattes/ui/globals.css` (+ les polices via `@import`).
- Ajouter un composant : `cd apps/web && pnpm dlx shadcn@latest add <x>` (routé vers `packages/ui` via `components.json`).
- Composants DS existants : `Button`, `ToggleChip`, `Select`. Importer via `@coequipattes/ui/components/<x>`.
- Routes : file-based dans `apps/web/src/routes/` (layout pathless `_public` pour Nav/Footer/JsonLd ; `admin/` séparé). Régénérer l'arbre : `pnpm --filter web generate-routes`.
- Avant un changement TanStack (Router/Start/Vite/server fn/route) : `pnpm dlx @tanstack/intent list` puis `... load <pkg>#<skill>` — suivre la guidance shippée plutôt que deviner.

## Migration Next.js → TanStack Start (2026-07-06, branche `migrate/tanstack-start`)
- Migré de **Next 16 App Router** vers TanStack Start. Scaffold via `npx @tanstack/cli@latest create` (flag `--tailwind` déprécié/ignoré, Tailwind activé d'office). Skills Intent chargées : `lifecycle/migrate-from-nextjs`, `execution-model`, `server-functions`, `server-routes`, `ssr`.
- Remplacements : App Router→file-router · API routes→server routes (`server.handlers`) · middleware `proxy.ts`→`src/start.ts` · `next/link`→`Link to`/`<a>` · `next/image`→`<img>` · `next/navigation`→`useNavigate`/`useLocation` · `next/font`→`@import` CSS · `metadata`→`head()` · `next/og`→`@vercel/og` · data loading→`loader` + `createServerFn`.
- **Env** : vars publiques `NEXT_PUBLIC_*`→`VITE_*` (lues via `import.meta.env`, `src/lib/env.ts`) ; secrets serveur inchangés (`process.env`, `src/lib/env.server.ts`). **Loaders isomorphes** → tout accès fs/env/secret DANS un `createServerFn`, jamais nu dans un loader.
- Redirections 301 de l'ex-`next.config.ts` → routes `beforeLoad` + `redirect({statusCode:301})` (`/garde-{chien,chat}-vannes` → `/visites-...`).
- Validé : `typecheck` + `build` + runtime (serveur Nitro + image Docker) verts.

## Marque & design → voir `packages/ui/BRAND.md` (north-star)
- **Mood** : chaleureux, rassurant, doux, personnel/artisanal, soigné. But : **« rassurer, pas impressionner »**.
- **Direction visuelle : clair chaleureux** (fond crème, texte brun, rose profond = action, blush = fonds doux). Virage depuis l'ancien dark-first néon. **Rose = accent signature unique** (pas de terracotta/caramel — c'est le cliché AI à éviter).
- **Budget motion sobre** : hover = couleur/opacité douce 150-200 ms. **Zéro** saut (`-translate-y`), scale, rotation, glow néon.
- Typo : **Fraunces** (display) / **Hanken Grotesk** (sans) / **Caveat** (accent manuscrit). Pas Playfair (serif-défaut).
- Migrer les couleurs en dur (`bg-black-card`, `text-white`, `bg-black`) vers les tokens sémantiques (`bg-card`, `text-foreground`, `bg-background`) pour que les sections suivent le thème.

## Déploiement
- **Build & serve** : `pnpm build` (Vite) → serveur Node autonome Nitro `apps/web/.output/server/index.mjs`. `pnpm --filter web start` = `node .output/server/index.mjs` (remplace l'ex `output: standalone` + `next start`). Preset Nitro dans `apps/web/vite.config.ts`.
- **Docker** : `Dockerfile` + `docker-compose.yml` migrés vers TanStack (build args `VITE_*`, runner sur `.output`, `CMD node .output/server/index.mjs`). Image build + run **testés OK** (docker build + smoke HTTP 200/301/307).
- **Reverse-proxy (Caddy `infra-caddy`)** : pendant le SSR, TanStack Start rappelle ses server functions via un `fetch` sur l'**origine de la requête** (`Host`), reconstruite en URL absolue. Caddy proxie `coequipattes.fr` → `site-coequipattes-web-1:3000` et **préserve `Host` + pose `X-Forwarded-Proto` par défaut** → correct sans réglage. Le conteneur (réseau `infra-net`) atteint `https://coequipattes.fr` en ~70 ms (hairpin vérifié) → self-fetch OK en prod. **Aucun changement Caddy/Docker requis.** (Le 500 `ECONNREFUSED` ne survient qu'en test local si port externe ≠ interne — artefact, pas un cas prod.) Option de robustesse : `extra_hosts` (compose) mappant `coequipattes.fr` sur Caddy interne pour éviter le hairpin — non nécessaire ici.
- Volumes (compose) : `src/data` (reviews/gallery JSON, lus/écrits via `process.cwd()`) et `public/uploads/gallery` (uploads runtime) → WORKDIR conteneur = `/app`.
- `DEPLOY_TODO.md` : notes historiques du passage en monorepo (chemins mis à jour ici).

## Ne pas toucher
- Gradients des routes OG/print (`opengraph-image.tsx`, `carte-logo/route.tsx`, `post-parrainage*`) : rendu Satori intentionnel, pas du slop.
