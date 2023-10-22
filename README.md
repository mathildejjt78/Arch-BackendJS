# Arch-BackendJS 

Ce projet a été créé en Node.js et Express.

## Table des matières
- Installation
- Configuration
- Lancement du projet
- Technos/Plugins Utilisés

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

- **mongoose** (v7.6.2) : ODM (Object Data Modeling) pour MongoDB.<br>
https://mongoosejs.com/

- **express** (v4.18.2) : Framework web Node.js minimal et flexible.<br>
https://expressjs.com/

- **bcryptjs** (v2.4.3) : Une bibliothèque de hachage pour le cryptage des mots de passe.<br>
https://www.npmjs.com/package/bcryptjs

- **body-parser** (v1.20.2) : Middleware d'analyse du corps des requêtes pour Express.<br>
https://www.npmjs.com/package/body-parser

- **cors** (v2.8.5) : Gestion de la politique Same-Origin de Cross-Origin Resource Sharing (CORS).<br>
https://www.npmjs.com/package/cors

- **json-web-token** (v3.2.0) : Génération et vérification des tokens JWT (JSON Web Tokens).<br>
https://www.npmjs.com/package/jsonwebtoken

<br><br>
❗️ N'hésitez pas à explorer la documentation de chaque bibliothèque pour en savoir plus sur leurs fonctionnalités et options de configuration.<br>
<br>
👍 Ce projet est conçu pour servir de base solide pour le développement d'applications backend en Node.js et Express. N'hésitez pas à l'adapter en fonction de vos besoins spécifiques et à ajouter d'autres bibliothèques ou fonctionnalités selon les exigences de votre projet.
