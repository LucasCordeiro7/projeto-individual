var interessadoModel = require("../models/interessadoModel");

function cadastrar(req, res) {
    var nome       = req.body.nomeServer;
    var email      = req.body.emailServer;
    var telefone   = req.body.telefoneServer;
    var idade      = req.body.idadeServer;
    var modalidade = req.body.modalidadeServer;
    var mensagem   = req.body.mensagemServer;
    var fk_crec    = req.body.fkCrecServer;

    if (nome == undefined) {
        res.status(400).send("Nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Email está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Telefone está undefined!");
    } else {
        interessadoModel.cadastrar(nome, email, telefone, idade, modalidade, mensagem, fk_crec)
            .then(function (resultado) {
                res.status(201).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao cadastrar o interessado! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listar(req, res) {
    interessadoModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json([]);
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    listar
}