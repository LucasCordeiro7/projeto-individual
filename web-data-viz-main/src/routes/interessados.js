var express = require("express");
var router = express.Router();

var interessadoController = require("../controllers/interessadoController");

router.post("/cadastrar", function (req, res) {
    interessadoController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    interessadoController.listar(req, res);
});

module.exports = router;