var alunoModel = require("../models/alunoModel");

function listar(req, res) {
    var fkProfessor = req.params.fkProfessor;

    alunoModel.listar(fkProfessor).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os alunos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    var nome         = req.body.nomeServer;
    var dataNasc     = req.body.dataNascServer;
    var faixa        = req.body.faixaServer;
    var pcd          = req.body.pcdServer;
    var transtorno   = req.body.transtornoServer;
    var status       = req.body.statusServer;
    var fkProfessor  = req.body.fkProfessorServer;

    if (nome == undefined) {
        res.status(400).send("Nome está undefined!");
    } else if (dataNasc == undefined) {
        res.status(400).send("Data de nascimento está undefined!");
    } else if (faixa == undefined) {
        res.status(400).send("Faixa está undefined!");
    } else if (status == undefined) {
        res.status(400).send("Status está undefined!");
    } else if (fkProfessor == undefined) {
        res.status(400).send("Professor está undefined!");
    } else {
        alunoModel.cadastrar(nome, dataNasc, faixa, pcd, transtorno, status, fkProfessor)
            .then((resultado) => {
                res.status(201).json(resultado);
            })
            .catch((erro) => {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    listar,
    cadastrar
}