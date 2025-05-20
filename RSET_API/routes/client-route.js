const router = require('express').Router();
const { clientRoute, addClient, updateClient } = require('../controller/client-controller');

// Client route 
router.get('/', clientRoute);
router.post('/', addClient);
router.put('/:id', updateClient);
module.exports = router; 