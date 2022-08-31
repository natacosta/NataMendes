const express = require("express")
const router =  express.Router();
const controles = require("../Controlers/controles")

router.get("/Portfolio" , controles.mostrarPortifolio)


module.exports = router