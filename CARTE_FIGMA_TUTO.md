# Tuto Figma — Carte de visite Co'équi'pattes

Recréation des 3 designs (recto, verso, version logo seul) dans Figma à partir des designs codés.

---

## 1. Setup du fichier Figma

### Créer le fichier
- **New file** → renomme `Co'équi'pattes — Cartes de visite`

### Comprendre les 3 zones de la carte
Quand l'imprimeur découpe une carte, sa lame n'est jamais précise au pixel près — il y a toujours 1-2mm de tolérance. Pour gérer ça, on travaille avec **3 zones imbriquées** :

```
┌─────────────────────────────┐  ← Bord du fichier (avec fond perdu)
│  ░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░ ┌───────────────────┐ ░  │  ← Ligne de coupe (carte finale 85×54mm)
│  ░ │                   │ ░  │
│  ░ │  ┌─────────────┐  │ ░  │  ← Zone de sécurité
│  ░ │  │             │  │ ░  │
│  ░ │  │   CONTENU   │  │ ░  │     • Fond perdu : étend les couleurs/images jusqu'ici
│  ░ │  │             │  │ ░  │     • Ligne de coupe : taille finale visible
│  ░ │  └─────────────┘  │ ░  │     • Zone de sécurité : où le texte/logo DOIT rester
│  ░ │                   │ ░  │
│  ░ └───────────────────┘ ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░  │
└─────────────────────────────┘
```

**🔴 Fond perdu (bleed)** — *3mm tout autour*
- C'est l'extension du fond et des images **au-delà** de la ligne de coupe.
- **Pourquoi** : si la lame coupe 1mm trop loin et que ton fond s'arrête pile à la ligne, tu auras un trait blanc moche sur le bord.
- **Règle** : tout ce qui est un fond coloré, une image, ou qui doit toucher le bord doit s'étendre jusqu'au bord du fichier (3mm au-delà de la coupe).

**🟢 Zone de sécurité (safe zone)** — *3mm en retrait*
- C'est la marge intérieure où placer le **contenu important** (textes, logos, dates, contact).
- **Pourquoi** : si la lame coupe 1mm trop tôt et que ton texte est près du bord, il sera tronqué.
- **Règle** : aucun texte, logo ou élément important à l'extérieur de cette zone.

> En résumé : **les fonds débordent de 3mm**, **les textes restent à 3mm du bord**.

### Format de la carte
> ⚠️ Figma travaille en **px** uniquement. On bosse à l'échelle 300dpi (standard imprimerie). Conversion : `mm × 300/25.4 = px`.

- Frame Figma (fichier total avec bleed) : **91 × 60 mm** = **1075 × 709 px**
- Carte finale (après découpe) : **85 × 54 mm** = **1004 × 638 px**
- Zone de sécurité : **79 × 48 mm** = **933 × 567 px**

### Créer la frame
1. Press `F` (Frame tool)
2. Custom size : **W 1075, H 709**
3. Renomme la frame : `Recto`

### Tracer les 2 repères visuels
Tu vas créer 2 rectangles **vides** (sans fill, juste un stroke) **à l'intérieur** de la frame, parfaitement centrés. Ils servent uniquement de guides — **on les supprimera avant l'export final**.

**Repère 1 — Ligne de coupe (1004×638 px)** :
1. Press `R` (Rectangle tool) → trace un rectangle dans ta frame
2. Dans le panneau de droite, mets **W 1004, H 638**
3. Sélectionne-le, puis `Align horizontal center` + `Align vertical center` (boutons en haut du panneau de droite quand le parent est sélectionné — ou utilise les raccourcis clavier `Alt+H` puis `Alt+V`)
4. Fill : **None** (clique sur le carré couleur dans Fill, choisis "None")
5. Stroke : 1px **rouge** (`#ff0000`) avec stroke style **Dashed** (Dash 4, Gap 4)
6. Renomme le calque : `_GUIDE coupe`
7. Lock le calque (icône cadenas) pour pas le bouger par accident

**Repère 2 — Zone de sécurité (933×567 px)** :
- Idem, dimensions **W 933, H 567**, stroke vert (`#00ff00`) pointillé
- Renomme : `_GUIDE safezone`
- Lock

> 💡 **Astuce** : préfixe le nom des guides avec `_` pour qu'ils restent en haut de la liste des calques et soient faciles à trouver.

### Avant l'export
Quand tu auras fini ton design, **avant d'exporter** : sélectionne tes 2 calques `_GUIDE` et masque-les (œil dans la liste des calques) ou supprime-les. Ils ne doivent pas apparaître dans le fichier que tu envoies à l'imprimeur.

### Activer le bleed visuel
1. Sélectionne la frame
2. Right panel → **Layout grid** → `+` → **Grid** → décoche, choisis **Rows** + **Columns**
3. Crée 4 guides à 3mm de chaque bord (zone de bleed)

### Couleurs à enregistrer comme styles
Crée des **Color Styles** (panneau de droite > clique sur le rond couleur > `+` Style) :

| Nom du style | Hex | Usage |
|--------------|-----|-------|
| `bg/main` | `#0e0612` | Fond principal |
| `bg/dark` | `#0a0a0a` | Variante plus neutre |
| `pink/primary` | `#ffa5c9` | Rose principal |
| `pink/dark` | `#e8598b` | Rose plus foncé (accents) |
| `text/white` | `#ffffff` | Titre principal |
| `text/light` | `#dddddd` | Sous-titre |
| `text/medium` | `#aaaaaa` | Texte secondaire |
| `text/muted` | `#888888` | Texte tertiaire |
| `text/dim` | `#666666` | Texte faible |
| `cream` | `#fdf8f2` | Fond QR code |

---

## 2. Typographie

3 polices Google Fonts à installer (téléchargeable gratuitement) :

| Police | Usage | Poids |
|--------|-------|-------|
| **Playfair Display** | Titre principal | Bold (700) |
| **Quicksand** | Texte courant, labels | SemiBold (600) |
| **Caveat** | Accents manuscrits ("avec passion") | Bold (700) |

### Installer les polices
1. Télécharge depuis [Google Fonts](https://fonts.google.com)
2. Installe-les sur ton OS (double-clic sur les `.ttf`)
3. Redémarre Figma

### Créer les Text Styles
Dans Figma : panneau de droite > onglet **Styles** > section **Text styles** > `+`.

> ℹ️ Figma exprime le **letter spacing en %** (pas en px). Le pourcentage est relatif à la taille de la police.

Toutes les tailles sont en pixels à l'échelle 300dpi (frame 1075×709) :

| Name | Font family | Style | Size | Line height | Letter spacing |
|------|-------------|-------|------|-------------|----------------|
| `title/headline` | Playfair Display | Bold | 48 | 110% | 0% |
| `title/script` | Caveat | Bold | 50 | 110% | 0% |
| `label/caps` | Quicksand | SemiBold | 24 | Auto | 17% |
| `body/large` | Quicksand | SemiBold | 23 | Auto | 2% |
| `body/medium` | Quicksand | SemiBold | 22 | Auto | 7% |
| `body/small` | Quicksand | SemiBold | 18 | Auto | 6% |
| `brand/name` | Playfair Display | Bold | 41 | Auto | 0% |

**Pour chaque style** :
1. Clique `+` à côté de "Text styles"
2. Remplis les champs : Name, Font family, Style, Size, Line height, Letter spacing
3. Clique "Create style"

> 💡 Si tu prends une autre résolution (par ex. 1500×945 pour du 450dpi), multiplie toutes les tailles par 1.5. Les pourcentages restent les mêmes.

---

## 3. Recto — version actuelle (médaillon + texte)

### Layout
La carte est divisée en 2 colonnes :
- **Gauche** (~40% — environ 400px sur 1004px) : médaillon avec logo
- **Droite** (~60%) : texte

### A. Fond
1. Sélectionne la frame `Recto`
2. Fill → `bg/main` (#0e0612)

### B. Halos décoratifs (subtle glows)
2 cercles flous en `#e8598b` (transparent radial gradient) :

**Halo gauche-bas :**
1. Cercle (`O`) → 200×200px
2. Position : x=-40, y=300 (déborde du cadre)
3. Fill → Radial gradient : `#e8598b` 0% (10% opacité) → transparent 70%
4. Effects → Layer Blur 50

**Halo droit-haut :**
- Idem, 160×160px, position x=850, y=-50, opacité 6%

### C. Médaillon (gauche)

**Container** : Frame de 350×350px positionnée à environ x=80, y=144 (centrée verticalement).

À l'intérieur, 3 éléments centrés :

1. **Anneau intérieur** :
   - Ellipse 380×380px, **stroke** 2px `#ffa5c9` à 18% opacité
   - Pas de fill

2. **Anneau extérieur (pointillé)** :
   - Ellipse 410×410px, **stroke** 2px `#ffa5c9` à 8% opacité
   - Stroke style : Dashed (Dash 8, Gap 6)

3. **Logo** :
   - File → Place Image → choisir `logo_rose.png` (depuis ton ordinateur)
   - Resize à 330×330px
   - Centré

### D. Colonne texte (droite)

Position : x=440, y=120 environ. Largeur : ~480px.

**Auto-layout vertical** (Shift+A) avec gap variables.

Empile dans cet ordre :

1. **Label "Vannes · Bretagne"** (avec barre rose à gauche) :
   - Frame horizontale, gap 10px
   - Rectangle 40×2px en `#ffa5c9` à 50% opacité
   - Texte "VANNES · BRETAGNE" — style `label/caps` en `#ffa5c9`
   - **Margin bottom : 22px**

2. **Titre principal** (2 lignes) :
   - Texte "Équitation &" — style `title/headline` en `#ffffff`
   - Texte "garde d'animaux" — même style
   - Line height : 110%

3. **"avec passion."** :
   - Texte — style `title/script` en `#ffa5c9`
   - **Margin top : 8px**

4. **Sous-titre activités** (2 lignes) :
   - "Monitrice diplômée" — style `body/large` en `#999`
   - "Pet-sitter professionnelle" — même
   - Gap 4px, **margin top : 22px**

5. **URL** (avec dot rose) :
   - Frame horizontale, gap 8px, items center
   - Cercle 7×7px en `#ffa5c9`
   - Texte "coequipattes.fr" — style `body/medium` en `#bbb`
   - **Margin top : 14px**

---

## 4. Verso — V1 (logo + contact + QR)

Crée une nouvelle frame `Verso V1` (91×60mm, ou duplique Recto et vide le contenu).

### A. Fond
- Fill → `bg/main` (#0e0612)

### B. Halo gauche
- Cercle 300×300px en x=-50, y=200
- Radial gradient `#e8598b` 8% → transparent 70%, blur 50

### C. Layout deux colonnes

**Colonne gauche** (~600px de large) :

1. **Header** (logo + brand name) — Auto-layout horizontal, gap 14px :
   - Logo `logo_rose_cropped.png` à 120×120px
   - Bloc texte vertical (gap 6px) :
     - "Co'équi'pattes" — style `brand/name` en `#ffffff`
     - "Vannes · Bretagne" — style `body/medium` en `#ffa5c9`, uppercase, letter spacing 2px
   - **Margin bottom : 30px**

2. **Séparateur horizontal** :
   - Rectangle full-width, height 1px
   - Fill : Linear gradient `#ffa5c9` 30% opacité → transparent
   - **Margin bottom : 30px**

3. **Bullet points** (auto-layout vertical, gap 18px) :
   
   Pour chaque ligne :
   - Frame horizontale, gap 12px, items center
   - Cercle 5×5px en `#ffa5c9`
   - Texte (style `body/large` en `#ccc`)
   
   Lignes :
   - Monitrice d'équitation indépendante
   - Pet-sitter professionnelle

**Séparateur vertical central** :
- Rectangle 1×350px
- Linear gradient vertical : transparent → `#ffa5c9` 18% (30%-70%) → transparent

**Colonne droite** (QR code) :

1. Container du QR :
   - Frame 270×270px, fill `#fdf8f2`, corner radius 12px, padding 12px
   - Auto-layout

2. **QR code** : 240×240px
   - Génère le QR sur [qrserver.com](https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=https%3A%2F%2Fcoequipattes.fr&bgcolor=fdf8f2&color=0e0612&format=png) (déjà dans le code)
   - Ou via [qr-code-generator.com](https://www.qr-code-generator.com/)
   - URL : `https://coequipattes.fr`
   - Couleurs : foreground `#0e0612`, background `#fdf8f2`
   - Télécharge en PNG, place dans Figma

3. **URL sous le QR** :
   - Texte "coequipattes.fr" — style `body/medium` en `#ccc`, letter spacing 2px
   - **Margin top : 16px**

### D. Footer

Position : bottom 26px de la frame, centré horizontalement.

- Frame horizontale auto-layout
- Texte "07 66 74 43 37 · co.equi.pattes@gmail.com" — style `body/small` en `#ffa5c9`, letter spacing 1.5px

---

## 5. Recto V2 — Logo seul (premium)

Frame `Carte Logo` (91×60mm).

### A. Fond
- Fill `#0e0612`

### B. Halo central
- Cercle 500×500px centré
- Radial gradient `#e8598b` 12% → transparent 65%, blur 70

### C. Anneaux décoratifs (centrés)
- Anneau 1 : ellipse 550×550px, stroke 2px `#ffa5c9` 14% opacité
- Anneau 2 : ellipse 600×600px, stroke 2px `#ffa5c9` 6%, dashed (Dash 8, Gap 6)

### D. Logo
- `logo_rose.png` à 530×530px, centré

### E. Dégradé bas (masque les anneaux derrière le texte)
- Rectangle full-width × 150px de hauteur
- Position : aligné en bas
- Fill : Linear gradient vertical : transparent → `#0e0612` (60% du haut)

### F. Texte en bas
Auto-layout vertical centré, gap 5px, position bottom 26px :
- "CO'ÉQUI'PATTES" — style `label/caps`, taille **29px**, letter spacing **5px**, en `#aaa`
- "Manon Millot" — Quicksand SemiBold **25px**, letter spacing 2px, en `#aaa`

---

## 6. Export pour l'impression

### Pour chaque carte :
1. Sélectionne la frame
2. Right panel → **Export** :
   - Format : **PDF** (idéal pour l'imprimeur) ou **PNG @4x** (3500×2200px environ)
   - Suffix : `_recto`, `_verso`, etc.
3. Vérifie : les couleurs s'exportent en RGB par défaut. **Pour de l'impression pro**, l'imprimeur convertira en CMJN (ou tu peux le faire dans Figma via plugin "CMYK" si besoin).

### Checklist avant envoi à l'imprimeur :
- [ ] Bleed 3mm appliqué (la frame fait 91×60mm)
- [ ] Tous les textes sont à au moins 8pt à 300dpi (= 33px sur la frame 91mm)
- [ ] Le QR code est testé (scanne-le avec ton tel, vérifie qu'il ouvre `coequipattes.fr`)
- [ ] Couleurs sombres : prévenir l'imprimeur que c'est un fond noir (peut nécessiter un papier différent ou un sur-encrage)

---

## 7. Assets à importer dans Figma

Disponibles dans `public/` :
- `logo_rose.png` — logo rose sur fond transparent (pour fonds sombres)
- `logo_rose_cropped.png` — version recadrée (moins d'espace blanc autour)
- `logo_blanc.png` — variante blanche
- `logo_noir.png` — variante noire (pour fonds clairs)

> Pour avoir le logo en SVG (vectoriel, scalable), il faudrait soit la version source du designer, soit utiliser un plugin Figma comme **Image to SVG** ou **Vectornator** pour vectoriser le PNG. Le PNG en haute résolution suffit pour l'impression d'une carte de visite.

---

## Tips

- **Components** : transforme les éléments répétés (bullet point + texte) en components Figma pour les réutiliser.
- **Variables** : utilise les Variables de Figma pour les couleurs (Color tokens) — plus facile à ajuster globalement.
- **Plugin utile** : **Mockup** pour voir le rendu de la carte en main avant impression.
- **Aperçu print** : exporte en PDF, ouvre-le et zoome à 100% — c'est ce que verra l'imprimeur.
