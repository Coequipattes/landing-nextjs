# Testimonials — Redesign Marquee double rang

**Date:** 2026-04-06  
**Statut:** Approuvé

## Objectif

Remplacer le carousel horizontal statique de la section "Témoignages" par un marquee double rang animé, plus vivant et plus impactant visuellement. Ajouter les étoiles Google et un badge de crédibilité.

## Design retenu

### Layout général

```
SectionHeader (inchangé)

[G] ★★★★★  4.9 · 22 avis Google

←←←  [card] [card] [card] [card] [card] [card]  ←←←   (rangée 1)
→→→  [card] [card] [card] [card] [card] [card]  →→→   (rangée 2)

(masque de fondu aux deux bords gauche/droite)
```

### Carte individuelle

- Largeur fixe : `w-72` (288px), non réductible (`shrink-0`)
- Étoiles `★★★★★` en rose en haut
- Texte tronqué à 3 lignes (`line-clamp-3`)
- Avatar initiales + nom auteur + date (`context`)

### Animations

- Rangée 1 : `scroll-left` en continu (~28s)
- Rangée 2 : `scroll-right` en continu (~35s, sens inverse)
- Vitesses différentes pour un effet organique
- `animation-play-state: paused` on hover sur le container
- Masque de fondu : `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`
- Duplication des cartes dans le DOM pour boucle infinie sans saut

### Badge Google

- SVG Google "G" multicolore + note `4.9 · 22 avis Google`
- Affiché au-dessus du marquee, centré ou aligné gauche
- Note calculée dynamiquement : moyenne des `rating` des avis visibles (arrondie à 1 décimale)
- Pas de lien externe (pas d'URL Google Maps disponible actuellement)

### Filtrage

- Seuls les avis avec `visible !== false` sont affichés (comportement inchangé)

## Changements de données

### `src/lib/google-reviews.ts`

- Ajouter `rating: number` au type `Review`
- Mapper `r.rating` dans `fetchGoogleReviews` (déjà retourné par le FieldMask `"reviews"`)
- `saveReviews` / `getReviews` : aucun changement nécessaire (JSON serialization)

### `src/data/reviews.json`

- Migration one-shot : ajouter `"rating": 5` sur les 22 avis existants
- Justification : les avis Google publiés sur cette fiche sont tous 5★

## Changements de composant

### `src/components/public/testimonials.tsx`

Refonte complète :
- Supprimer le flex scroll horizontal actuel
- Ajouter badge Google au-dessus
- Deux rangées marquee avec duplication des cartes
- Animations CSS via `@keyframes` dans le composant (ou globals.css)
- Pause on hover

## Ce qui ne change pas

- `SectionHeader` — inchangé
- `section#temoignages` — id, padding, max-width inchangés
- Interface `Review` dans `testimonials.tsx` — mise à jour pour inclure `rating`
- Logique de filtrage `visible !== false`
- Le type exporté `Review` dans `google-reviews.ts` — ajout de `rating` seulement
