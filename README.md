# SylvaGreen Capital — Site web

Site vitrine de **SylvaGreen Capital**, fonds professionnel vert dédié à la première transformation du bois (scieries, connexes, granulation, biomasse).

## Stack

- Next.js 15 (rendu statique `output: 'export'`)
- React 19 · TypeScript
- CSS pur (thème vert forêt / feuille / crème / or)

## Démarrage local

```bash
npm install
npm run dev
```

Site visible sur http://localhost:3000

## Portraits de l'équipe

Les 3 portraits (`olivier pellegrin.jpeg`, `laurent casset.jpeg`, `alain cochet.jpeg`) sont stockés **à la racine du dépôt** et servis via le CDN jsDelivr (`cdn.jsdelivr.net/gh/...`).

> **Migration possible plus tard :** pour les servir localement, glisser les 3 fichiers dans `public/images/` (upload web GitHub) et remplacer dans `app/page.tsx` les URLs `cdn.jsdelivr.net/...` par `/images/<nom>.jpeg`.

## Déploiement sur Vercel (gratuit)

1. Sur vercel.com → *Add New Project* → importer ce repo
2. Vercel détecte Next.js automatiquement → *Deploy*
3. *Settings → Domains* → connecter `www.sylvagreen-capital.fr`

## Structure

```
app/
  layout.tsx      — structure HTML + métadonnées SEO
  globals.css     — thème et styles
  page.tsx        — page unique, toutes les sections
*.jpeg            — portraits de l'équipe (racine, servis via CDN)
```

## Contact

Olivier PELLEGRIN — gérant de SylvaGreen Management — olivier.pellegrin@sylvagreen.fr
