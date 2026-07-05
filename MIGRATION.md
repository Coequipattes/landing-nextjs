# Migration des pages sur le design system

> État au terme de la session « design system ». Branche : `feat/design-system`.
> Contexte marque/design : `CLAUDE.md` + `packages/ui/BRAND.md`.

## Où on en est
- Monorepo `apps/web` + `packages/ui` (@coequipattes/ui) en place, build vert.
- **Design system COMPLET et validé** sur la page vitrine **`/ds`** (`apps/web/src/app/ds/page.tsx`) — c'est LA référence visuelle.
- Palette **clair chaleureux** posée dans les tokens (`packages/ui/src/styles/globals.css`).
- **MAIS le site public est encore sombre** : la home et les pages service codent les couleurs **en dur** (`bg-black-card`, `text-white`…) et n'utilisent pas encore la lib. Les tokens legacy (`--black`, `--white`…) pointent encore vers des valeurs sombres pour ne rien casser en attendant.

## But de la migration
Câbler les composants du DS dans les vraies sections **+** remplacer les couleurs `literal → sémantique` → le site bascule enfin en clair chaleureux.

## Composants dispo (import via `@coequipattes/ui/components/<x>`)
Atomes : `button` (`Button`) · `toggle-chip` (`ToggleChip`) · `input` (`Input`) · `textarea` (`Textarea`) · `select` (`Select`, …) · `badge` (`Badge`, tone neutral/rose/solid)
Molécules : `card` (`Card` + parts, `interactive`) · `accordion` (`Accordion` `items=[{q,a}]`) · `service-card` (`ServiceCard`) · `price-card` (`PriceCard`, `popular`) · `review-card` (`ReviewCard`, `clamp`, `StarRating`) · `info-card` (`InfoCard`) · `media-frame` (`MediaFrame`, `ratio`/`framed`/`focus`)
Bricks : `icon-medallion` (`IconMedallion`)

## Mapping literal → sémantique
| En dur (à remplacer) | → Sémantique |
|---|---|
| `bg-black` / `bg-black-soft` | `bg-background` |
| `bg-black-card` | `bg-card` |
| `text-white` / `text-white-soft` | `text-foreground` |
| `text-gray-light` / `text-gray` | `text-muted-foreground` |
| `text-pink` (accent) | `text-primary` |
| `border-pink/10` … `/35` | `border-border` |
| gradients/halos noirs (hero, contact, services-hub…) | fond crème + touches `bg-blush` douces |

## Ordre de migration (1 section = check live + 1 commit)
1. **Nav** (`nav.tsx`) + **Hero** (`hero.tsx`) — above-the-fold. Hero : image → `MediaFrame` (`framed` + `focus`), virer gradients noirs.
2. **Services** (`services-hub.tsx`) — les `HubCard` → `ServiceCard`.
3. **Testimonials** (`testimonials.tsx`) → `ReviewCard` (`clamp` sur la home).
4. **Contact** (`contact.tsx`) — form → `Input`/`Textarea`/`Select` ; `ContactItem` → `InfoCard`.
5. **Footer** (`footer.tsx`) — literal → sémantique.
6. **Pages service** (`service-page/*`) : `service-hero` (MediaFrame), `service-benefits` (`Card`), `service-related` (`Card interactive`), `service-area` (chips → `Badge`), `service-pricing` (`PriceCard`), `service-faq` (`Accordion`), `service-testimonials` (`ReviewCard`). `service-cta` : déjà `Button`.
7. **Gallery** (`gallery.tsx`) : literal → sémantique (garder masonry/overlay/lightbox bespoke).
8. **Nettoyage** : supprimer `service-faq.tsx` une fois remplacé par `Accordion` ; retirer les tokens legacy (`--black`, `--pink`, `--color-black-card`…) de `globals.css` **quand plus aucune classe ne les utilise** (grep pour vérifier).

## Pages & routes (scope)

### À migrer (public, warm-light)
- **Home** `(public)/page.tsx` → rend `Hero`, `ServicesHub`, `Gallery` (+`SectionHeader`), `Testimonials`, `Contact`.
- **Layout public** `(public)/layout.tsx` → `Nav`, `Footer`, `JsonLd` (wrap toutes les pages publiques).
- **5 pages service** (même template `<ServicePage>`, contenu différent → migrer les composants **une fois** couvre les 5, mais **vérifier chacune** en live) :
  - `visites-chien-vannes`, `visites-chat-vannes`, `garde-a-domicile-vannes`, `promeneur-chien-vannes`, `equitation-vannes` (⚠ équitation = univers cheval, contenu spécifique, même style).
  - Composants du template : `ServiceHero`, `ServiceIntro`, `ServiceBenefits`, `ServicePricing`, `ServiceArea`, `ServiceFaq`, `ServiceCta`, `ServiceTestimonials`, `ServiceRelated`, `ServiceJsonLd` (JsonLd = pas de style).
  - `Contact` est aussi rendu en bas de chaque page service (déjà couvert par la migration de `contact.tsx`).
- **Composants transverses à ne pas oublier** : `SectionHeader` (eyebrow/titre de section, littéraux à passer sémantiques), `ServiceIntro`.

### Hors scope — NE PAS toucher
- **Routes Satori / médias** (rendu image intentionnel, pas du slop) : `opengraph-image.tsx`, `og-a|b|c|d/opengraph-image.tsx`, `carte-logo|recto|verso-v1|verso-v2/route.tsx`, `post-parrainage{,-b,-c,-d,-e}/route.tsx`.
- **API** : `api/*` (auth, galerie, reviews, contact), `uploads/[...path]`.
- **Assets** : `icon.svg`, `favicon.ico`.

### Séparé (décider plus tard, PAS dans cette migration)
- **Admin** `admin/login`, `admin/dashboard{,/galerie,/temoignages}` : UI interne, utilise des couleurs Tailwind par défaut (`pink-100`/`pink-600`), pas les tokens de marque. À migrer dans un chantier dédié si voulu — ce n'est pas du public.
- **`/ds`** : la vitrine du DS, déjà en clair — la garder telle quelle (référence).

## Garde-fous
- **Dev server** : `pnpm --filter web dev` (déjà lancé par l'utilisateur d'habitude).
- **Typecheck** : `pnpm --filter web exec tsc --noEmit` et `pnpm --filter @coequipattes/ui exec tsc --noEmit`. Ne PAS lancer `build` prod pendant que le dev tourne (conflit `.next`).
- **NE PAS toucher à Docker/compose/.dockerignore** — voir `DEPLOY_TODO.md` (l'utilisateur gère le déploiement ; il est cassé par le move monorepo tant qu'il ne l'a pas mis à jour).
- Motion **sobre**, casse normale, pas de glow néon — se référer à `/ds` et `BRAND.md`.
- Committer par section, messages conventionnels.
