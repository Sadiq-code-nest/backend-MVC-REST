const router = require('express').Router();
const { clientRoute, addClient, updateClient, deleteClient } = require('../controller/client-controller');

// Client route 
router.get('/', clientRoute);
router.post('/', addClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);
module.exports = router; 