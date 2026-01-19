# QA Automation 1er Test

Projet personnel d'entraînement à l'automatisation de tests.

Ce projet a :
- des tests automatisés en JavaScript
- un serveur Express pour lancer les tests via une interface web
- des scénarios positifs et négatifs
- des screenshots générés automatiquement avec Playwright

---

## Technologies utilisées

- Node.js
- Express
- Playwright
- JavaScript

---

## Prérequis

- Node.js (version 18+)
- npm
- nvm (optionnel mais recommandé)

---

## Si Node et nvm ne sont pas à jour

1. Installer nvm (si on a pas) :
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
source ~/.zshrc   # ou ~/.bashrc selon le shell
```

2. Installer Node 20 :
```bash
nvm install 20
nvm use 20
node -v
npm -v 
```

3. Refaire l’installation des dépendances et lancer le serveur dev :
```bash
npm install
npm run dev
```
