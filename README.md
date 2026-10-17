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

## Images attendues dans `public/images/`

| Fichier | Contenu | Emplacement |
|---|---|---|
| `olivier-pellegrin.jpg` | Portrait Olivier Pellegrin | équipe |
| `laurent-casset.jpg` | Portrait Laurent Casset | équipe |
| `alain-cochet.jpg` | Portrait Alain Cochet | équipe |

(*Le site fonctionne sans ces fichiers ; prévoir un fallback ou les ajouter prochainement.*)

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
```

## Contact

Olivier PELLEGRIN — gérant de SylvaGreen Management — olivier.pellegrin@sylvagreen.fr
