const express = require("express");
const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT||3000}`);
})


const mainRouter = require("./routes/mainRouter")
const postRouter = require("./routes/postRouter")

app.use("/", mainRouter)
app.use("/posts", postRouter)