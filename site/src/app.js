const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

const mainRouter = require("./routes/mainRouter")
const postRouter = require("./routes/postRouter");

app.use("/posts", postRouter)
app.use("/", mainRouter)