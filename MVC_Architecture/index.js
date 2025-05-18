const express = require('express');
const app = express();
const port = 3000;
// User-data
const userRouter = require('./routes/user-route');
// Student-data
const studentData = require('./routes/student-route');

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(studentData);

app.use((req, res, next) => {
    res.status(404).json({
        msg: "not found",
    });
});

app.listen(port, () => console.log('Running'));