# Application d'Authentification avec JWT 🚀

Cette application permet de gérer l'authentification des utilisateurs en utilisant un système de jetons JWT pour la connexion avec un mot de passe. Elle comprend une interface simple réalisée avec React et est connectée à une base de données MongoDB pour stocker les informations des utilisateurs.

## Fonctionnalités

- Authentification des utilisateurs avec JWT.
- Interface utilisateur simple pour la connexion avec React.
- Stockage sécurisé des informations des utilisateurs dans MongoDB.

## Technologies utilisées

- **Backend** :
  - **Node.js** : Serveur pour l'API.
  - **Express** : Framework Node.js pour gérer les requêtes HTTP.
  - **JWT (JSON Web Token)** : Pour l'authentification sécurisée.
  - **MongoDB** : Base de données pour stocker les utilisateurs.
  - **Mongoose** : ORM pour interagir avec MongoDB.

- **Frontend** :
  - **React** : Framework JavaScript pour l'interface utilisateur.
  - **Axios** : Pour envoyer des requêtes HTTP au backend.

## Installation

### Prérequis

- **Node.js** installé sur votre machine. Vous pouvez le télécharger depuis [nodejs.org](https://nodejs.org/).
- **MongoDB** installé ou un cluster MongoDB en ligne (par exemple via MongoDB Atlas).

### Étapes d'installation

1. **Clonez le projet**
   ```bash
   git clone https://github.com/Islem-Chammakhi/authApp.git
   cd authentication-jwt-react-mongo
   
2. **Backend - Node.js & Express**
   ```bash
   cd backend
   npm install
   npm start
3. **Frontend - React**
   ```bash
   cd frontend
   npm install
   npm start
