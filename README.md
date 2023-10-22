# Arch-BackendJS 

Ce projet a été créé en Node.js et Express.

## Table des matières
- Installation
- Configuration
- Lancement du projet
- Technos/Plugins Utilisés

## Strucure du projet 📍

```bash

|__ 📁 controllers
|   ├── 📄 AuthController.js
|   ├── 📄 PkmController.js
|   ├── 📄 UserController.js
|__ 📁 middlewares
|   |__ 📄 authorization.js
|__ 📁 models
|   ├── 📄 pkm.js
|   ├── 📄 user.js
|__ 📁 routes
|   ├── 📄 authRouter.js
|   ├── 📄 pkmRouter.js
|   ├── 📄 userRouter.js

📄 index.js
.env
.gitignore
package.json
package-lock.json
README.md
```


## Installation ⚙️

1. **Clonez le Projet** : Pour commencer, clonez ce dépôt sur votre machine locale en utilisant la commande suivante :

   ```shell
   git clone https://github.com/votre-utilisateur/votre-projet.git
   ```

2. **Installez les Dépendances** : Installez les dépendances du projet à l'aide de npm avec la commande suivante :

   ```shell
    npm install
   ```

<br> <br>

## Configuration 🛠

1. **Créez un Fichier .env** : Avant de lancer le projet, vous devez configurer certaines variables d'environnement. Créez un fichier .env à la racine du projet.


2. **Ajoutez les Variables d'Environnement** : Ajoutez les variables d'environnement requises dans le fichier .env que vous venez de créer :

   ```shell
    DB_CONNECTION_STRING=URL_de_votre_base_de_données
   ```

<br> <br>

## Lancement du Projet 🚀

Pour lancer le projet, utilisez la commande suivante :

 ```shell
npm run start
```

**Le serveur sera accessible à l'adresse http://localhost:3000.**

<br><br>

## Technos/Plugins utilisés 💡

Voici un apperçu des technos et plugins utilisés :   

- **mongoose** (v7.6.2) : ODM (Object Data Modeling) pour MongoDB. Mongoose sert à simplifier l'interaction avec notre base de données MongoDB, en fournissant une modélisation d'objets et des fonctionnalités de validation pour nos schémas de données <br>
https://mongoosejs.com/


- **express** (v4.18.2) : Framework web Node.js minimal et flexible. J'ai choisi ce framework principal en raison de sa rapidité, de sa flexibilité et de sa facilité d'utilisation.<br>
https://expressjs.com/

- **bcryptjs** (v2.4.3) : Une bibliothèque de hachage pour le cryptage des mots de passe. BcryptJS garanti la sécurité des mots de passe des utilisateurs en les hachant de manière sécurisée avant de les stocker dans la base de données.<br>
https://www.npmjs.com/package/bcryptjs

- **body-parser** (v1.20.2) : Middleware d'analyse du corps des requêtes pour Express. J'ai intégré body-parser pour analyser et extraire les données JSON et URL encodées des requêtes HTTP, simplifiant ainsi le traitement des données entrantes.<br>
https://www.npmjs.com/package/body-parser

- **cors** (v2.8.5) : Gestion de la politique Same-Origin de Cross-Origin Resource Sharing (CORS). Cors a pour but de gérer les autorisations de ressources partagées (CORS) et permettre des requêtes depuis des domaines différents, assurant ainsi la communication fluide.<br>
https://www.npmjs.com/package/cors

- **json-web-token** (v3.2.0) : Génération et vérification des tokens JWT (JSON Web Tokens). Jsonwebtoken (JWT) permet de mettre en place un système d'authentification robuste, permettant la création et la vérification de jetons Web JSON pour gérer les sessions utilisateur de manière sécurisée.<br>
https://www.npmjs.com/package/jsonwebtoken

<br><br>
❗️ N'hésitez pas à explorer la documentation de chaque bibliothèque pour en savoir plus sur leurs fonctionnalités et options de configuration.<br>
<br>
👍 Ce projet est conçu pour servir de base solide pour le développement d'applications backend en Node.js et Express. N'hésitez pas à l'adapter en fonction de vos besoins spécifiques et à ajouter d'autres bibliothèques ou fonctionnalités selon les exigences de votre projet.
