const router = require('express').Router();
const { clientRoute, addClient } = require('../controller/client-controller');

// Client route 
router.get('/', clientRoute);
router.post('/', addClient);
module.exports = router; 