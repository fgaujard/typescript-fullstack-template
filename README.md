# Exercice Express

Ce projet est une application full-stack avec un frontend en React + TypeScript + Vite et un backend en Node.js + Express + TypeScript.
Le projet utilise `concurrently` pour exécuter le frontend et le backend en parallèle.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)

## Installation

### Dépendances

Pour installer les dépendances du projet, exécutez les commandes suivante dans le répertoire à la racine du projet :

```sh
npm i
```

Puis :

```sh
npm run i-all
```

Cette dernière installera les dépendances dans les dossiers frontend et backend.

### Variables d'environnement

Assurez-vous de créer un fichier .env à la racine de chaque dossier avec les variables suivantes :

**Frontend**

```
# .env.sample - Sample Environment Variables for Frontend (Vite)

# Backend API URL (call it in React with import.meta.env.VITE_BACKEND_URL)
VITE_BACKEND_URL=http://localhost:3310

# Other Environment Variables (if needed)
# VITE_OTHER_VARIABLE=value
```

**Backend**

```
# .env.sample - Sample Environment Variables

# Application Configuration
APP_PORT=3310
BACKEND_URL=http://localhost:

# Frontend URL (for CORS configuration)
FRONTEND_URL=http://localhost:3000
```

## Démarrage

Pour démarrer l'application, exécutez la commande suivante dans le répertoire racine du projet :

```sh
npm run dev
```

Cette commande démarrera le frontend et le backend en parallèle.

### Démarrer uniquement le frontend

Pour démarrer uniquement le frontend, exécutez la commande suivante :

```sh
npm run dev-front
```

### Démarrer uniquement le backend

Pour démarrer uniquement le backend, exécutez la commande suivante :

```sh
npm run dev-back
```

## API

**Endpoints**

- GET /api/posts : Récupère tous les posts
- POST /api/posts : Crée un nouveau post
- DELETE /api/posts/:id : Supprime un post par ID

## Dépendances

**Frontend**

- React
- TypeScript
- Vite
- Axios

**Backend**

- Express
- TypeScript
- ts-node-dev
- dotenv
- cors
- uuid

**Développement**

- concurrently
- cross-env

## Auteur

Flavien GAUJARD

## Licence

ISC
