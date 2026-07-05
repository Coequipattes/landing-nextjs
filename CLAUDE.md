# Co'équi'pattes — landing (monorepo)

> Décisions structurantes du projet. **À tenir à jour à chaque décision durable.**

## Architecture
- Monorepo pnpm : `apps/web` (site Next 16, React 19, Tailwind v4) + `packages/ui` (`@coequipattes/ui`, design system).
- **Design system = shadcn/ui.** Tokens = source unique dans `packages/ui/src/styles/globals.css` ; `apps/web/src/app/globals.css` importe `@coequipattes/ui/globals.css`.
- Ajouter un composant : `cd apps/web && pnpm dlx shadcn@latest add <x>` (routé vers `packages/ui` via `components.json`).
- Composants DS existants : `Button`, `ToggleChip`, `Select`. Importer via `@coequipattes/ui/components/<x>`.

## Marque & design → voir `packages/ui/BRAND.md` (north-star)
- **Mood** : chaleureux, rassurant, doux, personnel/artisanal, soigné. But : **« rassurer, pas impressionner »**.
- **Direction visuelle : clair chaleureux** (fond crème, texte brun, rose profond = action, blush = fonds doux). Virage depuis l'ancien dark-first néon.
- **Budget motion sobre** : hover = couleur/opacité douce 150-200 ms. **Zéro** saut (`-translate-y`), scale, rotation, glow néon.
- Typo : Playfair (display) / Quicksand (sans) / Caveat (accent manuscrit).
- Migrer les couleurs en dur (`bg-black-card`, `text-white`, `bg-black`) vers les tokens sémantiques (`bg-card`, `text-foreground`, `bg-background`) pour que les sections suivent le thème.

## Déploiement
- `DEPLOY_TODO.md` : le passage en monorepo a cassé les chemins Docker/compose/volumes. **Ne pas toucher aux fichiers Docker** — l'utilisateur gère le déploiement VPS lui-même.

## Ne pas toucher
- Gradients des routes OG/print (`opengraph-image.tsx`, `carte-logo/route.tsx`, `post-parrainage*`) : rendu Satori intentionnel, pas du slop.
