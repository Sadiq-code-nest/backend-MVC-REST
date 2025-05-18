const path = require("path");
exports.getUser = (req, res) => res.sendFile(path.join(__dirname + "/../views/form.html"));
const users = require('../models/user-models');
exports.postUser = (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const user = {
        name,
        age
    }
    users.push(user);
    res.status(201).json(
        {
            success: true,
            users,
        }
    )

};