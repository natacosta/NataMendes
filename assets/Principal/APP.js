const express = require("express")
const app = express()
const path = require("path");
const router = require("../Rotas/rotas")

app.use("/api", router)

app.use("/", express.static(path.join(__dirname, "../imagens")))

app.set("views" , path.join(__dirname ,"../Views"))
app.set("view engine", "ejs");

app.listen(5000, (erro)=>{

    if (erro){

        console.log(erro)
    }
    else(

        console.log("Server running")
    )
})
