const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/clientroute'); // Vérifiez ce chemin
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

//middleware for json data and axios
app.use(cors());
app.use(express.json());

// Utiliser les routes définies dans clientroute.js
app.use('/api/users', userRoutes); // Cela ajoute le préfixe /api/users aux routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
