const { v4: uuidv4 } = require('uuid');
let clients = [{
    id: uuidv4(),
    username: 'sadiq',
    email: 'sadiq1221@gmail.com'
},
{
    id: uuidv4(),
    username: 'nowreen',
    email: 'nowreen6339@gmail.com'

}];
module.exports = clients;