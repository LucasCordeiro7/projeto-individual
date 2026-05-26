var aquarioModel = require("../models/aquarioModel");

function buscarAquariosPorEmpresa(req, res) {
  var idProfessor = req.params.idProfessor;

  aquarioModel.buscarAquariosPorEmpresa(idProfessor).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var descricao = req.body.descricao;
  var idProfessor = req.body.idProfessor;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idProfessor == undefined) {
    res.status(400).send("idProfessor está undefined!");
  } else {


    aquarioModel.cadastrar(descricao, idProfessor)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}