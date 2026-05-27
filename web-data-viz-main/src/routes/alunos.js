var express = require("express");
var router = express.Router();

var alunoController = require("../controllers/alunoController");

router.get("/:fkProfessor", function (req, res) {
    alunoController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    alunoController.cadastrar(req, res);
});

module.exports = router;