# Pump Watch Frontend  

[![ReactJS](https://img.shields.io/badge/react-v18.0-blue)](https://reactjs.org/)  
[![TailwindCSS](https://img.shields.io/badge/tailwind-v3.0-teal)](https://tailwindcss.com/)  

## Description  
**Pump Watch** est une solution de maintenance prédictive pour les stations de pompage industrielles. Ce dépôt contient le code source du frontend développé avec **ReactJS** et **TailwindCSS**.  
L'interface utilisateur offre un tableau de bord en temps réel, des graphiques interactifs, et des alertes basées sur l'analyse des données des capteurs.  

**Dépôt GitHub :** [Pump Watch Frontend](https://github.com/AzizBenDhiab/pump-watch-FrontEnd)  

---
Voici un demo
https://drive.google.com/file/d/1xeXDrmfZY89OUAchdUp-exc47Uj3pcJM/view?usp=sharing

## Fonctionnalités  
- **Tableau de bord en temps réel** : Visualisation des données des capteurs (température, vibrations, pression, etc.).  
- **Graphiques interactifs** : Suivi des performances et tendances sur le temps.  
- **Alertes intelligentes** : Notifications pour des actions de maintenance préventive.  
- **Conception responsive** : Optimisée pour les écrans de bureau et mobiles grâce à TailwindCSS.  

---

## Structure des fichiers  
Voici un aperçu de la structure des fichiers principaux du projet :  
```plaintext  
pump-watch-FrontEnd/  
├── public/             # Fichiers publics (index.html, favicons)  
├── src/                # Code source principal  
│   ├── assets/         # Ressources statiques comme images et icônes  
│   ├── components/     # Composants React réutilisables  
│   ├── App.css         # Styles globaux  
│   ├── App.js          # Point d'entrée principal de l'application  
│   ├── index.css       # Configuration de TailwindCSS  
│   ├── index.js        # Point d'entrée pour ReactDOM  
├── package.json        # Dépendances et scripts du projet  
├── tailwind.config.js  # Configuration de TailwindCSS  
├── postcss.config.js   # Configuration PostCSS  
└── README.md           # Documentation du projet  
```  

---

## Prérequis  
Avant de démarrer, assurez-vous que les outils suivants sont installés :  
- **Node.js** (v16 ou plus récent)  
- **npm** ou **yarn**  

---

## Installation  
1. Clonez ce dépôt :  
   ```bash  
   git clone https://github.com/AzizBenDhiab/pump-watch-FrontEnd.git  
   cd pump-watch-FrontEnd  
   ```  

2. Installez les dépendances :  
   ```bash  
   npm install  
   # ou avec yarn  
   yarn install  
   ```  

---

## Lancer l'application  
Pour démarrer le serveur de développement, utilisez :  
```bash  
$env:PORT=3001; npm start

```  
L'application sera accessible à l'adresse suivante : [http://localhost:3000](http://localhost:3000)  

---


## Contribution  
1. Forkez ce dépôt.  
2. Créez une branche pour vos modifications : `git checkout -b feature/nom-de-la-feature`.  
3. Poussez vos modifications : `git push origin feature/nom-de-la-feature`.  
4. Soumettez une pull request.  

---




--- 

Ajoutez une section sur les tests ou les dépendances spécifiques si nécessaire. 😊
