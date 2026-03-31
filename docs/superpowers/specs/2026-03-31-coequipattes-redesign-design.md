# Co'equipattes — Refonte Next.js

Site vitrine one-page pour Manon Millot, monitrice d'equitation et pet-sitter a Vannes. Refonte du site HTML statique existant en Next.js 16 / TypeScript / Tailwind 4, avec back-office admin et integrations backend.

## Stack

- **Framework** : Next.js 16 (standalone output, Docker)
- **Language** : TypeScript
- **Styles** : Tailwind 4, mobile first, custom properties pour la palette dark/pink
- **Linting** : Biome
- **Email** : Resend
- **Images** : sharp (resize/compression cote serveur)
- **Hebergement** : Docker self-hosted (VPS)
- **Base de donnees** : Aucune. Fichiers JSON + filesystem.

## Architecture

```
src/
  app/
    (public)/              # Site vitrine
      page.tsx             # Page d'accueil one-page
      layout.tsx           # Layout public (nav + footer)
    admin/
      login/page.tsx       # Connexion admin
      dashboard/
        page.tsx           # Dashboard
        galerie/page.tsx   # Gestion galerie photos
        temoignages/page.tsx # Gestion avis
      layout.tsx           # Layout admin (sidebar)
    api/
      contact/route.ts          # Envoi email Resend
      admin/
        auth/route.ts           # Login/logout
        galerie/route.ts        # CRUD images
        reviews/route.ts        # Refresh avis Google
    layout.tsx             # Root layout (metadata SEO, fonts)
    globals.css
  components/
    public/                # Hero, Services, Gallery, Pricing, Testimonials, Contact
    admin/                 # Composants back-office
    ui/                    # Boutons, cards, inputs reutilisables
  lib/
    auth.ts                # JWT sign/verify, middleware helper
    resend.ts              # Client Resend
    google-reviews.ts      # Fetch avis Google Places API
    gallery.ts             # Read/write JSON + gestion fichiers images
  data/
    gallery.json           # Metadonnees galerie
    reviews.json           # Avis Google caches
```

### Stockage

- **Images galerie** : `public/uploads/gallery/` (servies statiquement par Next.js)
- **Metadonnees** : `data/gallery.json` et `data/reviews.json`
- **Pas de DB** : le volume d'images est faible (quelques dizaines), un seul container, filesystem suffisant

## Site public

Page unique (`/`) en one-page avec navigation par ancres.

### Sections

| Section | Contenu | Source de donnees |
|---------|---------|-------------------|
| Hero | Logo, accroche, 2 CTA (contact + en savoir plus) | Statique |
| A propos | Photo Manon, texte, highlights (diplomee, assuree...) | Statique |
| Services | Tabs equitation / pet-sitting, cards par prestation | Statique |
| Galerie | Grille filtree par categorie + lightbox | `data/gallery.json` + images uploadees |
| Tarifs | Tabs equitation / pet-sitting, cards tarifs | Statique |
| Temoignages | Carrousel d'avis | `data/reviews.json` |
| Contact | Infos (email, tel, localisation) + formulaire | Envoi via Resend |

### Navigation

- Nav fixe avec scroll spy (highlight section visible)
- Hamburger menu mobile
- Smooth scroll vers les ancres

### Design visuel

- **Mobile first** : breakpoints Tailwind pour scale up (`sm:`, `md:`, `lg:`)
- Reproduction fidele du theme dark + pink actuel
- Palette via custom properties CSS : `--pink: #ffa5c9`, `--black: #0a0a0a`, etc.
- Fonts : Playfair Display (titres), Quicksand (corps), Caveat (accents)
- Animations : reveal au scroll (IntersectionObserver), particules hero, hover cards
- `next/image` pour optimisation automatique des images

### SEO

- Metadata complete dans root layout (title, description, Open Graph, Twitter Card)
- Schema.org JSON-LD : `LocalBusiness` (type `ProfessionalService`) avec adresse, tel, zone de service
- Balises semantiques (`<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- `sitemap.xml` et `robots.txt` generes par Next.js

## Back-office admin

### Auth

- 1 seul utilisateur admin
- Email + mot de passe (hash bcrypt en env var `ADMIN_PASSWORD_HASH`, email en `ADMIN_EMAIL`)
- Cookie JWT httpOnly signe avec `AUTH_SECRET`, expiration 7 jours
- Middleware Next.js sur `/admin/*` (sauf `/admin/login`)
- Logout = suppression du cookie

### Pages admin

| Route | Fonction |
|-------|----------|
| `/admin/login` | Formulaire email/mdp |
| `/admin/dashboard` | Vue d'ensemble (nb photos, dernier refresh avis) |
| `/admin/galerie` | Upload, editer titre/categorie/ordre, supprimer |
| `/admin/temoignages` | Voir avis Google, toggle visible/masque, bouton refresh |

### Galerie — fonctionnalites

- Upload image (drag & drop ou file picker)
- Resize/compression cote serveur via `sharp`
- Metadonnees : titre, categorie (equitation/chiens/chats/nac), ordre d'affichage
- Suppression (fichier + entree JSON)

### Temoignages — fonctionnalites

- Affiche les avis depuis `reviews.json`
- Toggle visible/masque par avis (filtre les avis non pertinents)
- Bouton "Rafraichir maintenant" (appelle l'endpoint fetch Google)

### Design admin

Sobre et fonctionnel. Tailwind par defaut (fond clair, minimal). Pas de theme pink.

## Integrations

### Resend (email)

- Server action sur soumission du formulaire de contact
- Template email avec les infos du formulaire (nom, email, sujet, message)
- Env var : `RESEND_API_KEY`, `CONTACT_EMAIL_TO`

### Google Places API (avis)

- Cron sur le host : `0 3 * * *` appelle `POST /api/admin/reviews` avec header `Authorization: Bearer $CRON_SECRET`
- L'endpoint fetch l'API Google Places, ecrit `data/reviews.json`
- Le site sert les avis depuis ce fichier cache (pas d'appel client)
- Resilient : si l'API est down, les derniers avis caches restent affiches
- Env vars : `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`, `CRON_SECRET`

## Deploiement

- `output: "standalone"` dans `next.config.ts`
- Dockerfile multi-stage (build + runtime)
- Volume Docker pour `data/` et `public/uploads/` (persistence)
- Variables d'environnement :
  - `ADMIN_EMAIL`
  - `ADMIN_PASSWORD_HASH`
  - `AUTH_SECRET`
  - `RESEND_API_KEY`
  - `CONTACT_EMAIL_TO`
  - `GOOGLE_PLACES_API_KEY`
  - `GOOGLE_PLACE_ID`
  - `CRON_SECRET`

## Hors scope

- Calendrier / systeme de reservation
- Paiement en ligne
- Multi-utilisateurs admin
- Base de donnees
- S3 / stockage objet
