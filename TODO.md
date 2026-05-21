# Phase 2 SEO — Pages services locales

Branche : `feat/seo-service-pages`
Décision archi : 5 pages statiques individuelles dans `src/app/(public)/`.

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
- [x] Mettre à jour `src/app/sitemap.ts` (ajouter les 5 routes, priority 0.8, changeFrequency monthly)
- [x] Vérifier `src/app/robots.ts` n'exclut pas les nouvelles routes
- [x] **Fix critique Nav/Footer ancres** : `usePathname` + `next/link` pour que `#about`/`#services` redirige vers `/#about` quand on n'est pas sur la home
- [x] Build PASS + sitemap.xml généré contient les 5 routes

## Phase B — Page pilote `/pet-sitting-vannes` (à faire après A)
- [x] Page complète avec contenu draft (à valider Manon)
- [x] `next build` → route `/pet-sitting-vannes` visible
- [ ] Test Rich Results sur l'URL en preview (Phase F, après déploiement)
- [ ] Lighthouse SEO ≥ 95 (Phase F)
- [ ] Revue manuelle : 0 lien cassé, FAQ a11y, photo dédiée (photo Manon pending)

## Phase C — Brief contenu Manon (parallèle, BLOQUANT pour Phase D)
- [ ] Email envoyé à Manon avec questions par page
- [ ] Photos dédiées reçues (5)
- [ ] FAQ réelles reçues (5 × 5)
- [ ] Communes desservies confirmées
- [ ] Anecdotes / témoignages spécifiques reçus

## Phase D — Déclinaison 4 autres pages (parallélisable)
- [ ] `/garde-chien-vannes`
- [ ] `/garde-chat-vannes`
- [ ] `/promeneur-chien-vannes`
- [ ] `/equitation-vannes`

## Phase E — Maillage interne
- [ ] Footer : colonne "Nos services à Vannes" avec 5 liens
- [ ] Home `Services` : 2 liens contextuels "En savoir plus →"
- [ ] Bloc `ServiceRelated` "Voir aussi" sur chaque page service

## Phase F — Mise en prod + GSC
- [ ] Merge PR vers `main`
- [ ] Deploy validé sur les 5 URLs
- [ ] GSC : `request indexing` sur les 5 URLs
- [ ] GSC : sitemap.xml soumis et 5 URLs détectées
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
- Photos manquantes en prod — bloquer le merge tant que les 5 photos ne sont pas livrées
