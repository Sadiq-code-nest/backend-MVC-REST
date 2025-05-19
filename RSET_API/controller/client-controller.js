const clients = require('../models/client-model')
const clientRoute = (req, res) => res.status(200).json({ clients });
const addClient = (req, res) => res.status(200).json({ msg: 'i am post method' });
module.exports = { clientRoute, addClient };