# TaskFlow — API RESTful avec Node.js / Express / MongoDB

> TP ENSPM Maroua | Année 2025-2026

## Présentation

TaskFlow est une application Full-Stack de gestion de tâches. Ce dépôt contient :

- **`taskflow-backend`** : API RESTful construite avec Node.js, Express et MongoDB (Mongoose)
- **`taskflow-frontend`** : Interface React consommant l'API via Axios

---

## Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (v18 ou supérieur)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) (v8.x)
- [MongoDB Compass](https://www.mongodb.com/products/compass) *(optionnel, pour visualiser les données)*
- npm (inclus avec Node.js)

---


## Lancer le projet

### Étape 1 — Démarrer la base de données MongoDB

Ouvrez un terminal **en tant qu'administrateur** et exécutez :

```bash
net start MongoDB
```

Vous devriez voir :
```
Le service MongoDB a démarré.
```

> Si MongoDB Compass est installé, vous pouvez vous y connecter via `mongodb://localhost:27017` pour visualiser les données.

---

### Étape 2 — Lancer le serveur Back-End

```bash
cd taskflow-backend
npm install
npm run dev
```

Le serveur sera disponible sur : `http://localhost:5000`

Vérifiez que tout fonctionne en accédant à :
```
http://localhost:5000/api/ping
```
Réponse attendue : `{ "message": "Serveur TaskFlow operationnel" }`

---

### Étape 3 — Lancer l'interface Front-End React

Ouvrez un **nouveau terminal** et exécutez :

```bash
cd taskflow-frontend
npm install
npm run dev
```

L'application sera disponible sur : `http://localhost:5173`

---

## Variables d'environnement

Créez un fichier `.env` à la racine de `taskflow-backend` :

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskflow
```

---

## Points de terminaison de l'API

| Méthode | Route | Description |
|--------|-------|-------------|
| GET | `/api/ping` | Vérification du serveur |
| GET | `/api/tasks` | Récupérer toutes les tâches |
| POST | `/api/tasks` | Créer une nouvelle tâche |
| PUT | `/api/tasks/:id` | Modifier le statut d'une tâche |
| DELETE | `/api/tasks/:id` | Supprimer une tâche |

---

## Modèle de données

```json
{
  "title": "Nom de la tâche (obligatoire, max 100 caractères)",
  "description": "Description optionnelle",
  "status": "A faire | En cours | Termine"
}
```

---

## Auteur

**Barka Eben-Ezeer**
Niveau 3 — ENSPM Maroua
Année académique 2025-2026
