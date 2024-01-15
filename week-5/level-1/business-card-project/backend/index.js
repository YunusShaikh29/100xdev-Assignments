const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const userRouter = require("./routes/user");
const cardsRouter = require("./routes/cards")
require('dotenv').config()
const PORT = process.env.PORT

// Middleware for parsing request bodies
app.use(express.json());
app.use("/user", userRouter)
app.use("/business-card", cardsRouter)




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
