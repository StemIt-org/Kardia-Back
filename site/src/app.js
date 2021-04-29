const express = require("express");
const app = express();
const path = require('path')
const viewsPath = path.resolve(__dirname, "./views");

app.use(express.urlencoded({ extended: false }));


app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT||3000}`);
})

app.set("view engine", "ejs");
app.set("views", viewsPath);

const mainRouter = require("./routes/mainRouter")
const postRouter = require("./routes/postRouter")

app.use("/", mainRouter)
app.use("/posts", postRouter)