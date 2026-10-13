# MediPlus — Template vitrine pour application mobile

Page vitrine gratuite et open source pour présenter et faire télécharger une application Android (APK).
L'exemple fourni présente **MediPlus**, une application fictive d'hôpital : rendez-vous, téléconsultation, résultats d'analyses, dossier médical.

Aucun framework, aucune installation : juste du HTML, du CSS et du JavaScript.

## Fonctionnalités

- Design responsive (mobile, tablette, ordinateur)
- Mode sombre / clair
- Défilé animé des captures d'écran
- Animations au scroll
- Bouton de téléchargement de l'APK

## Utilisation

1. Téléchargez ou clonez le dépôt :
   ```bash
   git clone https://github.com/debady/Template-free-vitrine-n.1.git
   ```
2. Ouvrez `index.html` dans votre navigateur.

## Personnalisation

| Quoi | Où |
|---|---|
| Nom, textes, fonctionnalités, développeur | `index.html` |
| Captures d'écran | `script.js`, tableau `screensData` |
| Couleurs et polices | `style.css` |
| Fichier APK | placez-le dans `statiques/app.apk` |

Pour les captures d'écran, ajoutez l'URL de chaque image :

```js
const screensData = [
  { url: 'https://exemple.com/accueil.jpg', label: 'Accueil' },
  { url: '', label: 'Profil' }, // url vide = case colorée
];
```

## Mise en ligne

Le site est statique : il peut être hébergé gratuitement sur GitHub Pages, Netlify ou Vercel, ou sur n'importe quel hébergeur web.

## Licence

Libre et gratuit : utilisez-le, modifiez-le et partagez-le comme vous le souhaitez.

## Auteur

**N'Guessan** — Développeur
- Site : [losgeek.com](https://losgeek.com/)
- GitHub : [@debady](https://github.com/debady)

## Soutenir le projet

Ce template vous a été utile ? Vous pouvez laisser un pourboire :

**[Faire un don via Wave](https://pay.wave.com/m/M_tIANKibM-_Hn/c/ci/)**

Merci !
