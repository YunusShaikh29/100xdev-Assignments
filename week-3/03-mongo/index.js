const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

const PORT = 5000

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.use((err, req, res, next) => {

    res.json({
        msg: err
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
