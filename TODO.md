# Phase 2 SEO — Pages services locales

Branche : `feat/seo-service-pages`
Décision archi : 4 pages statiques individuelles dans `src/app/(public)/` + home optimisée "pet sitter à Vannes" (consolidation Phase J).

## Phase A — Fondations (sans contenu) — COMPLÈTE, mergeable
- [x] Créer `src/content/service-pages/types.ts` (interface `ServicePageData`)
- [x] Créer 5 fichiers data squelettes : `src/content/service-pages/{slug}.ts`
- [x] Extraire `equitationCards` + `petsittingCards` de `pricing.tsx` vers `src/content/pricing-data.ts`
- [x] Adapter `pricing.tsx` pour importer (zéro régression home)
- [x] Créer 10 composants squelettes dans `src/components/public/service-page/` :
  - [x] `service-hero.tsx`
  - [x] `service-intro.tsx`
  - [x] `service-benefits.tsx`
  - [x] `service-pricing.tsx`
  - [x] `service-area.tsx`
  - [x] `service-faq.tsx` (accordéon a11y, indispensable pour FAQPage schema)
  - [x] `service-testimonials.tsx`
  - [x] `service-cta.tsx`
  - [x] `service-related.tsx`
  - [x] `service-json-ld.tsx`
- [x] Mettre à jour `src/app/sitemap.ts` (ajouter les routes services, priority 0.8, changeFrequency monthly)
- [x] Vérifier `src/app/robots.ts` n'exclut pas les nouvelles routes
- [x] **Fix critique Nav/Footer ancres** : `usePathname` + `next/link` pour que `#about`/`#services` redirige vers `/#about` quand on n'est pas sur la home
- [x] Build PASS + sitemap.xml généré contient les routes services

## Phase B — Page pilote `/pet-sitting-vannes` (à faire après A) — RETIRÉE Phase J
- [x] Page complète avec contenu draft (à valider Manon)
- [x] `next build` → route `/pet-sitting-vannes` visible
- [x] Décision Phase J : page supprimée (cannibalisait la home déjà optimisée "pet sitter à Vannes")

## Phase C — Brief contenu Manon (parallèle, BLOQUANT pour Phase D)
- [ ] Email envoyé à Manon avec questions par page
- [ ] Photos dédiées reçues (5)
- [ ] FAQ réelles reçues (5 × 5)
- [ ] Communes desservies confirmées
- [ ] Anecdotes / témoignages spécifiques reçus

## Phase D — Déclinaison 4 autres pages (parallélisable) — COMPLÈTE
- [x] `/garde-chien-vannes`
- [x] `/garde-chat-vannes`
- [x] `/promeneur-chien-vannes`
- [x] `/equitation-vannes`
- [x] Photos dédiées chien (`/manon_chiens.webp`) et chat (`/manon_chat.webp`) livrées + `imageAlt` descriptif par page (a11y)

## Phase E — Maillage interne — COMPLÈTE (mise à jour Phase J : 4 liens)
- [x] Footer : colonne "Nos services à Vannes" avec 4 liens
- [x] Home `Services` : 2 liens contextuels "En savoir plus →"
- [x] Bloc `ServiceRelated` "Voir aussi" sur chaque page service (2 liens après Phase J)

## Phase I — Refonte Hero humain — COMPLÈTE
Contexte : le Hero précédent était "marque vitrine" multi-services type SaaS.
La concurrence locale (Animaute, Goliate) = marketplaces froides — notre
différenciation = c'est UNE personne avec une vraie vocation. Décision :
photo grande échelle de Manon en split desktop / stack mobile, H1 hybride
"Manon, votre pet sitter & monitrice d'équitation à Vannes" (préserve SEO
Vannes + services + introduit la personne).
- [x] Audit `hero.tsx` actuel + identification de ce qui n'incarne pas la nouvelle vision
- [x] Refonte `hero.tsx` : layout split 7/5 desktop, stack mobile (photo en premier)
- [x] Photo `/uploads/manon.jpg` via `next/image` avec `preload` +
      `fetchPriority="high"` (LCP), `sizes` responsive, `object-position` 20%
- [x] H1 hybride humain + SEO : "Manon" XL pink + sous-titre service
- [x] Eyebrow `font-accent` "Bonjour, moi c'est" (signature manuscrite)
- [x] Sous-titre chaleureux mentionnant Morbihan + USP "100% du temps"
- [x] CTAs conservés (`#services` + `#contact`) + focus-visible ring
- [x] Trust signals discrets sous CTAs (3 bullets pink)
- [x] `about.tsx` : refonte sans portrait dominant pour éviter la duplication
      visuelle avec le Hero (même photo 2 fois d'affilée = visuellement
      redondant). Remplacé par carte "lettre manuscrite" : citation Caveat XL
      + signature « Manon » + paw watermark SVG + badges de confiance.
      Photo About dédiée demandée dans BRIEF_MANON.md (toi en action :
      cours, balade, soin) — quand reçue : réintroduire un visuel
      différent du Hero.
- [x] BRIEF_MANON.md : ajout section photo Hero/About + checklist
- [x] Validations : tsc PASS, biome PASS, build PASS
- [x] Itération copy Phase I (2026-05-20) :
      - Hero intro raccourci à la 1re phrase + `<strong>` sur
        "la même attention que s'ils étaient les miens"
      - Citation manuscrite About remplacée par "Plus de dix ans à côté
        des chevaux, et une vie à observer les animaux. Ce n'est pas un
        métier que j'ai choisi par hasard."
      - Suppression complète du statement "pas d'animal personnel /
        100% de mon temps" (3 occurrences supprimées : Hero, citation
        About, paragraphe About body)
      - Audit "Manon" home : 7 occurrences first-party (hors testimonials)
        listées pour validation (cf. rapport agent)

## Phase J — Consolidation : suppression `/pet-sitting-vannes` — COMPLÈTE
Contexte : audit a confirmé que la page `/pet-sitting-vannes` cannibalisait
la home déjà optimisée pour la requête "pet sitter à Vannes" (title, H1,
metadata, hero). Contenu redondant à 90%, tarif 0,25€/km abandonné par
choix de Manon. Décision : supprimer la page, consolider sur la home.
- [x] `git rm` `src/app/(public)/pet-sitting-vannes/page.tsx`
- [x] `git rm` `src/content/service-pages/pet-sitting-vannes.ts`
- [x] `src/content/service-pages/index.ts` : retrait import + entrée du tableau
- [x] Sitemap : auto-MAJ via le tableau (passe à 4 routes services)
- [x] `services-hub.ts` : retrait de la carte ombrelle "Pet sitter à Vannes"
- [x] `services-hub.tsx` : refonte layout 5 cartes asymétrique → grille 2×2
      régulière (4 services peer, plus de vocation ombrelle). Titre :
      "Comment je peux vous aider" (1ère personne, aligné Phase I humain).
- [x] Footer : 5 → 4 liens "Nos services à Vannes"
- [x] `related[]` des 4 pages restantes : retrait `pet-sitting-vannes`
      (les listes tombent à 2 entrées, pas de remplacement artificiel)
- [x] Audit home "pet sitter à Vannes" : PASS (metadata + hero intacts)
- [x] BRIEF_MANON.md : section dédiée pet-sitting fusionnée avec home
- [x] Validations : tsc PASS, build PASS, curl /pet-sitting-vannes → 404,
      curl 4 autres pages services → 200

## Phase H — Refonte home en hub vitrine — COMPLÈTE
Contexte : la home dupliquait le contenu des 5 pages services dédiées
(cannibalisation + duplicate content). Décision : transformer la home en
hub brand + 5 cartes catchy qui drivent vers les pages détail.
- [x] Audit composants home (Hero/About/Services/Pricing/Gallery/Testimonials/Contact)
- [x] Retirer `Services` (doublon des pages services) et `Pricing` (doublon)
      de la home — ne pas les supprimer du repo (réutilisés par pages dédiées)
- [x] Créer `src/content/services-hub.ts` (5 cartes avec teaser propre au hub,
      mot-clé SEO en titre, prix d'entrée)
- [x] Créer `src/components/public/services-hub.tsx` :
  - [x] Layout asymétrique : carte ombrelle "Pet sitter à Vannes" pleine
        hauteur à gauche, grille 2×2 à droite (desktop) ; stack vertical mobile
  - [x] Icônes SVG inline (paw-heart, dog, cat, leash, horse) — pas d'emoji
  - [x] Hover : élévation + glow pink + flèche translate
  - [x] CTA "Découvrir" via `next/link` (5 liens vers pages services)
- [x] Hero : remplacer CTA "Réserver un cours" (trop équitation) par
      "Voir mes services" (#services) + "Prendre contact" (#contact)
- [x] Nav + Footer : retirer le lien "Tarifs" (ancre `#tarifs` n'existe
      plus sur la home, les tarifs vivent désormais dans les pages services)
- [x] `SectionHeader` : `title` accepte ReactNode (titre 2 lignes pink/blanc)
- [x] SEO préservé : `metadata` + `JsonLd` intacts, 5 keywords présents
      dans le body, tous les CTAs `next/link` pour le crawl
- [x] Validations : tsc PASS, biome PASS, build PASS, curl home (5 liens
      services ×2 = ServicesHub + Footer), curl 5 pages services 200

## Phase F — Mise en prod + GSC
- [ ] Merge PR vers `main`
- [ ] Deploy validé sur les URLs (home + 4 pages services)
- [ ] GSC : `request indexing` sur les URLs (home + 4 services)
- [ ] GSC : sitemap.xml soumis et URLs détectées
- [ ] Snapshot positions actuelles (baseline pour mesurer dans 4-8 semaines)

## TODOs JSON-LD (Vague 1, à compléter avec Manon)
- [x] Logo : `logo_rose.png` confirmé (fix appliqué)
- [x] `aggregateRating` : 5.0/24 confirmé par Manon via Google Maps
- [ ] Géoloc précise du 4 rue Tamara de Lempicka (actuellement centre Vannes 47.6559 / -2.7603)
- [ ] `openingHoursSpecification` réels (actuellement Lun-Dim 08-20h par défaut)
- [ ] `sameAs` : URLs Facebook, Instagram, Google Business Profile
- [ ] `serviceArea` rayon : confirmer 10 km
- [ ] Tarif "Travail cheval" : confirmer 35€/séance
- [ ] Tarif "Cours collectif" : confirmer 25€ unitaire vs forfait
- [ ] Email contact (NEXT_PUBLIC_CONTACT_EMAIL) : confirmer la valeur exposée publiquement

## Risques actifs
- Cannibalisation `pet-sitting-vannes` ↔ `garde-chien-vannes` — mitigation : hiérarchie ombrelle/niche, maillage interne
- Duplicate content — règle : 350-500 mots uniques min, FAQ et témoignages filtrés différents, photo dédiée
- Ancres Nav/Footer cassées sur pages service — fix Phase A5
- Photos manquantes en prod — bloquer le merge tant que les photos services ne sont pas livrées (4 pages désormais)
- `/equitation-vannes` : `area.neighborhoods` réduit à `["Vannes", "Morbihan sud"]` faute d'info sur la structure d'accueil (écurie partenaire ? domicile cavalier ?) — à préciser avec Manon avant publication, sinon le bloc `ServiceArea` paraît creux comparé aux autres pages
- 4 pages partagent le même `hero.image` (`/uploads/manon.jpg`) en attendant les photos dédiées — risque de signal de duplication faible côté Google + cohérence visuelle pauvre, à débloquer en Phase F
