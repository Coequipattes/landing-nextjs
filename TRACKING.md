# Tracking — Umami Analytics

Analytics self-hébergé sur `https://umami.benjamin-niddam.dev`, script injecté uniquement en prod (`apps/web/src/routes/__root.tsx`, gate `import.meta.env.PROD`). Aucun cookie, RGPD-friendly.

## Ce qui est natif à Umami (aucun code)

- **Pages vues** et **temps sur page**.
- **Referrer** (site d'où vient le visiteur) et **navigation SPA** : le script patche `pushState`/`popstate`, donc chaque changement de route TanStack Router déclenche une vue sans code additionnel.
- **Sessions/parcours** : rapport "Journey" natif pour voir l'enchaînement des pages visitées par session.
- **Sources/Canaux** : regroupe les referrers en catégories (Organic Search, Social, Direct, Referral...). Limite connue : Instagram et Facebook (navigateurs in-app) suppriment souvent le referrer → trafic classé en "Direct" sans tag UTM. Un clic sur le lien "Site web" d'une fiche Google Business Profile envoie le même referrer (`google.com`) qu'une recherche organique → indiscernable sans tag UTM.

## Ce qui a été ajouté en code

Fichier : `apps/web/src/lib/analytics.ts`, initialisé dans `__root.tsx` (`useEffect`, prod uniquement). Routes `/admin/*` explicitement exclues des deux trackers ci-dessous.

### Clics

Écoute globale (`click`, capture) sur tout `a`, `button`, `[role="button"]`, `[data-umami-event]`. Envoie un event `click` avec :
- `element` (tag), `label` (aria-label > texte visible > href), `href` (si lien), `path`.

### Profondeur de scroll

Event `scroll_depth` déclenché une fois par palier (`25/50/75/90/100`), par page (reset au changement de route SPA).

### Conversion formulaire de contact

`apps/web/src/components/public/contact.tsx` envoie un event `contact_form_submit` avec `result: "success" | "error"` (et `subject` si succès), déclenché sur la vraie réponse du `fetch` — pas sur le simple clic du bouton "Envoyer".

## Attribution des sources externes (UTM)

Umami capture nativement `utm_source` / `utm_medium` / `utm_campaign` (rapport "UTM" dans Sources). Convention : `utm_source` = plateforme, `utm_medium` = type de placement, `utm_campaign` = emplacement précis.

Une URL avec `?utm_source=...` colle mal sur un profil (ça fait "louche"/spam pour Manon et pour un visiteur qui la verrait affichée). Solution : **une seule route de tracking 100% libre**, `apps/web/src/routes/s.$slug.tsx`.

Format : `coequipattes.fr/s/<slug>` — tout ce qui précède le **premier tiret** devient `utm_source`, le reste devient `utm_campaign`. Aucune table, aucune restriction, aucun code à toucher pour un nouveau canal ou une nouvelle campagne : n'importe quel slug fonctionne du premier coup.

| Slug collé | `utm_source` | `utm_campaign` |
|---|---|---|
| `insta-bio` | `insta` | `bio` |
| `google-business` | `google` | `business` |
| `qr` (pas de tiret) | `qr` | `qr` |
| `insta-story-soldes-ete` | `insta` | `story-soldes-ete` |

#### Exemples concrets

| Situation | Lien à coller | UTM enregistrés |
|---|---|---|
| Bio Instagram (lien permanent) | `coequipattes.fr/s/insta-bio` | `insta / bio` |
| Page Facebook (lien permanent) | `coequipattes.fr/s/fb-bio` | `fb / bio` |
| Fiche Google Business Profile | `coequipattes.fr/s/google-business` | `google / business` |
| QR code carte de visite | `coequipattes.fr/s/qr-carte` | `qr / carte` |
| Signature email | `coequipattes.fr/s/mail-signature` | `mail / signature` |
| Story Instagram "place dispo cette semaine" | `coequipattes.fr/s/insta-dispo-cette-semaine` | `insta / dispo-cette-semaine` |
| Post Instagram vidéo cours d'équitation | `coequipattes.fr/s/insta-video-equitation` | `insta / video-equitation` |
| Story Facebook promo de Noël pension chat | `coequipattes.fr/s/fb-promo-noel-chat` | `fb / promo-noel-chat` |

Dans le rapport UTM d'Umami, ça donne des lignes distinctes et comparables :

| Source | Campaign | Visiteurs |
|---|---|---|
| insta | bio | 45 |
| insta | dispo-cette-semaine | 12 |
| insta | video-equitation | 8 |
| fb | promo-noel-chat | 6 |
| google | business | 11 |

→ on voit directement que la story de mardi a ramené 12 visiteurs et le post vidéo équitation seulement 8, sans jamais coller une URL avec `?utm_source=...` — et n'importe quel nouveau slug fonctionne sans redéploiement.

**Limite** : ne fonctionne que pour les liens tagués. Un partage/republication sans UTM retombe en "Direct" — aucune solution pour ce cas.
