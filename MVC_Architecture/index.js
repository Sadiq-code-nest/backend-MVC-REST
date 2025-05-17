const express = require('express');
const app = express();
const port = 8080;
const userRouter = require('./routes/user-route')

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
router.use((req, res, next) => {
    res.status(404).json({
        msg: "not found",
    });
});

app.listen(port, () => console.log('Running'));