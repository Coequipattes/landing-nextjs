# Rapport SEO & AEO — Co'équi'pattes (coequipattes.fr)

_Audit du 12 juillet 2026 — état réel du code sur `dev` (build + serveur Nitro local testés), croisé avec le rapport Google Search Console du site en ligne (3 derniers mois) et le rapport SEO/AEO précédent du 6 juillet._

**Scope : strictement le code.** Rien sur Google Business Profile, citations locales ou netlinking (hors-code, non actionnable cet après-midi).

**Méthode** : audit statique multi-agents (17 agents, 6 dimensions, chaque finding important/bloquant re-vérifié adversarialement) + vérification dynamique par build réel (`pnpm build` + serveur Nitro local + `curl` sur les 8 pages, sitemap, robots, llms.txt) pour confirmer ce qui sort vraiment en HTML/JSON-LD, pas seulement ce qui est écrit dans le source.

---

## 0. Le constat qui prime toujours sur tout le reste

Le rapport Search Console de production (`coequipattes.fr`, 3 derniers mois, 302 clics / 7848 impressions) confirme noir sur blanc :

```
Pages.csv → une seule URL : https://coequipattes.fr/
```

**Le site en ligne aujourd'hui n'a qu'une seule page indexée.** Le codebase `dev` en a 8 (home + 7 pages service), avec schema riche, FAQ, canonicals propres. Déployer reste la priorité absolue — mais **pas tel quel** : la vérification dynamique de cet audit a trouvé du contenu de brouillon qui sortirait publiquement dès la mise en ligne (§1).

---

## 1. 🔴 P0 — Bloquant

### 1.1 ✅ Corrigé — Texte `[DRAFT]` retiré de la FAQ équitation
Les 2 réponses `[DRAFT - ...]` de `apps/web/src/content/service-pages/equitation-vannes.ts:73,85` ont été reformulées en texte publiable (décision : on déploie avec ce contenu tel quel, le volet équitation étant secondaire sur le site). Vérifié en HTML/JSON-LD réel après rebuild : 0 occurrence de "DRAFT" sur `/equitation-vannes`.

### 1.2 Non touché — Alt text de galerie (`gallery.json`)
Confirmé par Benjamin : c'est la version de test/dev, pas un bug à corriger maintenant. Laissé tel quel.

### 1.3 ✅ Corrigé — Formulaire de contact : labels liés aux champs
`id`/`htmlFor` ajoutés sur les 4 paires label/champ (`contact.tsx`). Vérifié en HTML réel après rebuild.

### 1.4 ✅ Corrigé — Boutons de la lightbox galerie
`aria-label="Fermer"` / `"Photo précédente"` / `"Photo suivante"` ajoutés sur les 3 boutons (`gallery.tsx`).

---

## 2. 🟠 P1 — Fort impact

| Problème | Statut | Détail |
|---|---|---|
| **Prix erroné dans le JSON-LD** — Promenade chien annoncée jusqu'à 22 € au lieu de 21 € | ✅ Corrigé | `json-ld.tsx` aligné sur `pricing-data.ts` (source de vérité). Vérifié en JSON-LD réel après rebuild : `maxPrice: "21"`. |
| **Zone de couverture incohérente** — Theix-Noyalo dans JSON-LD/llms.txt mais absente de `coverage.ts` (footer) | ✅ Corrigé | `json-ld.tsx` et `llms[.]txt.ts` dérivent maintenant dynamiquement de `COVERAGE.communes` au lieu d'une liste en dur — `coverage.ts` redevient la seule source de vérité, comme demandé. Vérifié en sortie réelle : zone identique partout (Vannes, Arradon, Plescop, Séné, Saint-Avé, Ploeren + Morbihan). |
| **2 `<h1>` simultanés dans le DOM de la home** (mobile + desktop) | ✅ Corrigé | Le bloc desktop (`hero.tsx`) est passé de `<h1>` à `<p>` (classes identiques, zéro changement visuel) ; le `<h1>` mobile reste l'unique titre sémantique — cohérent avec l'indexation mobile-first de Google. Vérifié : 1 seul `<h1>` en HTML rendu. |
| **robots.txt ne bloque pas `/api/`** | ✅ Corrigé | `Disallow: /api/` ajouté. Vérifié en sortie réelle. |
| **Image hero de la home (LCP) non optimisée** | ✅ Corrigé | `manon.jpg` redimensionnée 1706×2560 → 1000×1501 et recompressée (mozjpeg q82) : **553 Ko → 119 Ko** (-79%), aucun changement de chemin donc aucun code à toucher ailleurs. `width`/`height` ajoutés sur le `<img>`. |
| **Polices Google Fonts sans `preconnect`** | Non traité | `apps/web/src/styles.css:3` — pas demandé explicitement, laissé pour plus tard. |
| **Lightbox sans gestion du focus clavier** | Non traité | `apps/web/src/components/public/gallery.tsx:128` — pas demandé explicitement, laissé pour plus tard. |

---

## 3. 🟡 P2 — Mineur, post-lancement

Regroupés, tous à faible effort sauf mention contraire :
- `robots.txt` : ajouter `Disallow: /api/`, référencer `/llms.txt` (convention émergente llmstxt.org), exclure `carte-verso-v2`/`post-parrainage-d` (générateurs d'images internes, cf. « Ne pas toucher » du CLAUDE.md — ne pas modifier ces routes elles-mêmes, juste les exclure du crawl).
- Title de `promenade-chien-vannes` (68 car.) et `garde-a-domicile-vannes` (65 car.) au-dessus du seuil de troncature SERP (~60 car.).
- Pas de `theme-color`/`site.webmanifest`/`apple-touch-icon` — cosmétique mobile, pas un facteur de ranking.
- **FAQ absente de la home** (retrait volontaire du 10/07, commit propre, aucun schema orphelin) — pas un bug, mais un choix produit à trancher : la home est la page la plus susceptible d'être citée par une IA générique, une `FAQPage` y aurait de la valeur AEO.
- H1/H2 de la home restent identitaires (« Manon » + tagline) plutôt qu'answer-first, contrairement aux 7 pages service qui répondent dès la première phrase.
- 4 pages service encore commentées `// DRAFT - à valider Manon` (contenu déjà rédigé proprement, à faire relire par Manon — distinct du bug 1.1 qui, lui, est bloquant).
- Fil d'Ariane présent en JSON-LD uniquement, jamais affiché visuellement.
- Galerie : JPEG qualité 80 sans variante `.webp`, pas de `srcset` (poids réseau, `width`/`height`/`lazy` déjà corrects par ailleurs).
- Hero des pages service : `loading="eager"` sans `fetchPriority="high"` (incohérent avec le hero home qui l'a).
- Pas de `preconnect` vers le domaine Umami (impact quasi nul, script déjà `defer` + conditionné prod).
- Pas de skip-link (« aller au contenu »).

---

## 4. Ce que dit le vrai Search Console — pour prioriser le contenu post-lancement

284 requêtes distinctes sur 3 mois (`coequipattes.fr`, une seule page). Les plus instructives :

| Requête | Impressions | Clics | Position | Lecture |
|---|---|---|---|---|
| pet sitter vannes | 610 | 23 | 2.98 | ✅ déjà solide — la home cible bien ce terme |
| **garde chat vannes** | 364 | 7 | 4.77 | CTR 1.92% seulement malgré le volume → `/visites-chat-vannes` (nouvelle page dédiée) devrait nettement améliorer position ET CTR |
| **garde de chien vannes** | 337 | 3 | 6.5 | CTR 0.89%, pire position du lot → `/visites-chien-vannes` cible exactement ce terme, à surveiller en priorité après déploiement |
| **pet sitter morbihan** | 231 | 1 | 2.24 | Bonne position mais CTR 0.43% quasi nul → **aucune page n'affiche « Morbihan » dans son title/H1** ; à considérer pour la home ou une page dédiée |
| **promeneur de chien vannes** | 215 | 1 | 2.51 | Bonne position, CTR 0.47% → le title dit *« Promenades »*, pas *« Promeneur »* ; le mismatch lexical peut réduire le surlignage/l'attractivité en SERP |
| garde chien vannes | 215 | 16 | 1.96 | ✅ meilleure conversion actuelle |
| manon millot / manon vannes / manon | 17 / 42 / 45 | 2 / 0 / 0 | variable | Recherches de marque réelles → confirme l'intérêt d'une page « À propos de Manon » dédiée et indexable (E-E-A-T), au-delà du bloc actuel sur la home |
| équitation vannes | 3-4 | 0 | 1-1.33 | Volume quasi nul pour l'instant — normal, nouveau service, à suivre après lancement |

**Pas une priorité aujourd'hui**, mais à garder pour un futur contenu FAQ/blog : énormément de longue traîne en « autour de moi », « à domicile », « particulier » (`garde chien à domicile autour de moi`, `pension pour chien particulier`, `chenil autour de moi`...) qui ne convertit pas encore du tout (0 clic sur la quasi-totalité).

---

## 5. Ce qui est déjà très bien fait (ne pas casser)

- **Metadata par page** : `serviceHead()` génère systématiquement title/description/canonical absolu/OG/Twitter Card unique et cohérent sur les 8 pages — vérifié en HTML rendu, pas juste dans le source.
- **`og:image` par page service** : résolu depuis le rapport du 6/07 — chaque page a sa propre image OG dynamique (`/og-service/$slug/opengraph-image`), plus l'image racine générique.
- **JSON-LD très riche et vérifié cohérent avec l'affiché** : `LocalBusiness` complet (geo, areaServed, openingHours, `sameAs` Instagram/Facebook/Blooming Pets), 6 vrais `Review` (pas déclaratifs, dérivés du même fichier que les témoignages affichés à l'écran), `AggregateRating` 5.0/22 cohérent, `FAQPage`/`BreadcrumbList`/`Service` sur chaque page service.
- **Sitemap/robots/redirections** : sitemap = exactement les 8 URLs publiques, aucune fuite admin/api ; redirections `/garde-chien-vannes` → `/visites-chien-vannes` en vrai 301 (vérifié par `curl`), pas 302/307.
- **`llms.txt`** généré dynamiquement depuis les mêmes données que le reste du site (pas de liste statique périmée).
- **Structure Hn propre sur les 7 pages service** (un seul H1 chacune), landmarks sémantiques (`nav`/`main`/`footer`), alt text descriptifs sur toutes les images hero (sauf galerie, cf. P0).
- **Performance de base saine** : `lucide-react` en imports nommés (tree-shaking OK), Umami en `defer` + conditionné prod, code-splitting par route actif nativement, cache `immutable` sur `/uploads`.

---

## 6. Plan d'action pour cet après-midi

1. ~~Corriger le P0~~ — fait (1.1 reformulé, 1.3 et 1.4 corrigés ; 1.2 laissé tel quel, décision assumée).
2. ~~Corriger le P1 rapide~~ — fait (prix promenade, zone Theix-Noyalo, `Disallow: /api/`, fusion des 2 H1, image hero optimisée -79%).
3. ~~Build + re-vérifier~~ — fait, `pnpm build` + `pnpm typecheck` verts, tous les correctifs confirmés en HTML/JSON-LD réellement rendu après rebuild.
4. **Déployer.**
5. **Après déploiement** : vérifier `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/opengraph-image` en prod réelle (pas juste en local), soumettre le sitemap dans Google Search Console.
6. Le reste (P2, `preconnect` fonts, focus management lightbox, page « À propos de Manon », FAQ home) : à traiter dans les jours qui suivent, aucun n'empêche un lancement propre aujourd'hui.
