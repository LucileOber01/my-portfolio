# Lucile Ober · Portfolio

Portfolio de Lucile Ober, Product Owner / AMOA en recherche d'alternance dès janvier 2027.

**Site en ligne : https://lucileober01.github.io/my-portfolio/**

Le site est pensé comme un **Product Board** : les sections sont des user stories (US), les projets des releases (REL) et le parcours une roadmap Now / Next / Later.

## Fonctionnalités

- **2 pages** : Accueil et Projets, avec une navigation commune (menu burger sur mobile)
- **Backlog de compétences** : savoir-faire et savoirs, chacun relié à son origine
- **Roadmap** du parcours professionnel
- **Carrousel des releases** : contexte, objectif, rôle, résultat, technos et compétences de chaque projet
- **Formulaire de contact** fonctionnel, avec états d'envoi, d'erreur et de confirmation
- **CV téléchargeable** en PDF
- **Formes animées au scroll**, désactivées si l'utilisateur a choisi de réduire les animations
- Site **responsive** (mobile, tablette, ordinateur) et **accessible** (navigation au clavier, textes alternatifs, contrastes)

## Stack technique

| Outil | Usage |
|---|---|
| [Figma](https://www.figma.com/) | Maquettes et design system |
| [React 19](https://react.dev/) | Interface |
| [React Router](https://reactrouter.com/) | Navigation entre les pages |
| [Tailwind CSS 4](https://tailwindcss.com/) | Mise en forme |
| [Vite](https://vite.dev/) | Serveur de développement et build |
| [Formspree](https://formspree.io/) | Envoi du formulaire de contact |
| [GitHub Actions](https://github.com/features/actions) + [GitHub Pages](https://pages.github.com/) | Déploiement automatique |

## Lancer le projet en local

Prérequis : [Node.js](https://nodejs.org/) version 20 ou plus.

```bash
git clone https://github.com/LucileOber01/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Le site est alors disponible sur `http://localhost:5173/my-portfolio/`.

## Déploiement

À chaque `git push` sur la branche `main`, le workflow `.github/workflows/deploy.yml` construit le site (`npm run build`) et le publie sur GitHub Pages.

## Structure du projet

```
src/
├─ assets/       Images (photo)
├─ components/   Éléments réutilisables (Navbar, Footer, cartes…)
├─ data/         Contenus du site (compétences, roadmap, releases)
├─ pages/        Les pages (Accueil, Projets)
├─ App.jsx       Routes et structure commune
└─ index.css     Couleurs, polices et import de Tailwind
public/          Fichiers copiés tels quels (CV, favicon)
```

Les contenus sont séparés de l'affichage : pour ajouter une compétence ou un projet, il suffit d'ajouter une entrée dans `src/data/`.

## Crédits

- Polices : [League Gothic](https://fonts.google.com/specimen/League+Gothic), [Questrial](https://fonts.google.com/specimen/Questrial) et [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), Google Fonts, licence OFL
- Formulaire : Formspree
- Hébergement : GitHub Pages

## Auteure

**Lucile Ober** · [lucile.ober@pm.me](mailto:lucile.ober@pm.me)