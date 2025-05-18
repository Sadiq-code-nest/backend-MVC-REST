const express = require('express');
const { getStudent, postStudent } = require('../controller/student-controller');
const Student_router = express.Router();

Student_router.get('/student', getStudent);
Student_router.post('/student', postStudent);

module.exports = Student_router;