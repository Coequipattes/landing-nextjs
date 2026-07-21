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

Une URL avec `?utm_source=...` colle mal sur un profil (ça fait "louche"/spam pour Manon et pour un visiteur qui la verrait affichée). Solution : des **liens courts internes** — des routes du site qui redirigent (302) vers l'URL taguée, définies dans `apps/web/src/routes/{instagram,facebook,google,qr,mail}.tsx`. Rien à installer, rien à coller de compliqué.

| Canal | Où coller le lien | Lien à coller | Redirige vers |
|---|---|---|---|
| Instagram bio | Profil → Site web | `coequipattes.fr/instagram` | `utm_source=instagram&utm_medium=bio&utm_campaign=lien_bio` |
| Facebook page | Infos de la page → Site web | `coequipattes.fr/facebook` | `utm_source=facebook&utm_medium=bio&utm_campaign=lien_page` |
| Google Business Profile | Fiche → Site web | `coequipattes.fr/google` | `utm_source=google_business&utm_medium=referral&utm_campaign=fiche_gbp` |
| QR code (carte/flyer) | URL encodée dans le QR | `coequipattes.fr/qr` | `utm_source=qrcode&utm_medium=print&utm_campaign=carte_visite` |
| Signature email | Lien de signature | `coequipattes.fr/mail` | `utm_source=email&utm_medium=email&utm_campaign=signature` |

### Campagnes ponctuelles (story, post précis)

Pour ne pas perdre le grain fin des UTM (un `utm_campaign` différent par story/post) sans devoir ajouter une route à chaque fois, une route dynamique unique couvre tous les cas ponctuels : `apps/web/src/routes/s.$source.$campaign.tsx`.

Format : `coequipattes.fr/s/<source>/<nom-libre-de-la-campagne>` — `<nom-libre>` peut être n'importe quel texte (`soldes-ete`, `video-chiot-juillet`...), aucun redéploiement requis pour une nouvelle campagne.

Sources disponibles (table dans le fichier de route) :
- `insta-story` → `utm_source=instagram&utm_medium=story`
- `insta-post` → `utm_source=instagram&utm_medium=post`
- `fb-story` → `utm_source=facebook&utm_medium=story`
- `fb-post` → `utm_source=facebook&utm_medium=post`

Exemple : `coequipattes.fr/s/insta-story/soldes-ete` → `utm_source=instagram&utm_medium=story&utm_campaign=soldes-ete`. Une source absente de la table renvoie une 404 (garde-fou contre les fautes de frappe) — ajouter une nouvelle source = une ligne dans la table, pas une nouvelle route.

#### Exemples concrets

| Situation | Lien à coller | UTM enregistrés |
|---|---|---|
| Story Instagram "place dispo cette semaine" pour une garde de chien | `coequipattes.fr/s/insta-story/dispo-cette-semaine` | `instagram / story / dispo-cette-semaine` |
| Post Instagram avec une vidéo d'un cours d'équitation | `coequipattes.fr/s/insta-post/video-cours-equitation` | `instagram / post / video-cours-equitation` |
| Story Facebook promo de Noël sur les pensions chat | `coequipattes.fr/s/fb-story/promo-noel-pension-chat` | `facebook / story / promo-noel-pension-chat` |
| Post Facebook partageant un témoignage client | `coequipattes.fr/s/fb-post/temoignage-rex` | `facebook / post / temoignage-rex` |
| Bio Instagram (lien permanent, jamais de campagne) | `coequipattes.fr/instagram` | `instagram / bio / lien_bio` |
| Fiche Google Business Profile | `coequipattes.fr/google` | `google_business / referral / fiche_gbp` |

Dans le rapport UTM d'Umami, ça donne des lignes distinctes et comparables :

| Source | Medium | Campaign | Visiteurs |
|---|---|---|---|
| instagram | bio | lien_bio | 45 |
| instagram | story | dispo-cette-semaine | 12 |
| instagram | post | video-cours-equitation | 8 |
| facebook | story | promo-noel-pension-chat | 6 |
| google_business | referral | fiche_gbp | 11 |

→ on voit directement que la story de mardi a ramené 12 visiteurs et le post vidéo équitation seulement 8, sans jamais coller une URL avec `?utm_source=...`.

**Limite** : ne fonctionne que pour les liens tagués. Un partage/republication sans UTM retombe en "Direct" — aucune solution pour ce cas.
