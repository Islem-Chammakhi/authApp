const Client = require('../models/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validator =require("validator")

// Générer un token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Sign Up
exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body)
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required !' });
  }
  if(!validator.isEmail(email)){
    return res.status(400).json({ message: 'Email not valid !' });
  }
  if(!validator.isStrongPassword(password)){
    return res.status(400).json({ message: 'password is not strong enough !' });
  }
  try {
    const clientExists = await Client.findOne({ email });
  console.log(clientExists)

    if (clientExists) return res.status(400).json({ message: 'Client already exists' });
    
    const user = await Client.create({ name, email, password });
  console.log(user)

    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      user: generateToken(user.id),
    });
    console.log("sucess")

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  try {
    const client = await Client.findOne({ email });
    if (!client) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, client.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({
      _id: client.id,
      name: client.name,
      email: client.email,
      user: generateToken(client.id),
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.getClients=async(req,res)=>{
  try {
    const clients = await Client.find({}, "name email"); // Récupère uniquement les champs `name` et `email`
    res.status(200).json(clients); // Renvoie les utilisateurs
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
  }
}