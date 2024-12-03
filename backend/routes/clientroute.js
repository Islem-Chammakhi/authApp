const express = require('express');
const router = express.Router();
const { signUp, signIn,getClients } = require('../controllers/clientController');
const requireAuth=require('../middleware/requireAuth')
// Route correcte pour la requête POST sur /api/users/signup
router.post('/signup', signUp);  // Assurez-vous que la route correspond exactement à celle utilisée dans Postman
router.post('/signin', signIn);

//protect routes bellow !!!!!!!!! by requiring authentification
router.use(requireAuth)

router.get('/clientlist',getClients);


  

module.exports = router;
