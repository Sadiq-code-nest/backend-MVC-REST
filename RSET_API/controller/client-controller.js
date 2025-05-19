const clients = require('../models/client-model')
const { v4: uuidv4 } = require('uuid');
//get client
const clientRoute = (req, res) => res.status(200).json({ clients });
//create new clients
const addClient = (req, res) => {
    const newClient_data = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    }
    clients.push(newClient_data);
    res.status(200).json(clients)
}
module.exports = { clientRoute, addClient };