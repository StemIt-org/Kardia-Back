const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.json())

require('dotenv').config()
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

const mainRouter = require("./routes/mainRouter")
const postRouter = require("./routes/postRouter");

app.use("/posts", postRouter)
app.use("/", mainRouter)
