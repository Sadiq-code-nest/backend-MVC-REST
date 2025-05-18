const path = require("path");
exports.getStudent = (req, res) => res.sendFile(path.join(__dirname + "/../views/Students_data.html"));
const Students = require('../models/Students-models ');
exports.postStudent = (req, res) => {
    const ID = Number(req.body.ID);
    const Company = req.body.Company;
    const Student = {
        ID,
        Company
    }
    Students.push(Student);
    res.status(201).json(
        {
            success: true,
            Students,
        }
    )

};