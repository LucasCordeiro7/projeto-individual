var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM crec WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, razao_social, cnpj, codigo_ativacao FROM crec`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM crec WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(razaoSocial, cnpj) {
  var instrucaoSql = `INSERT INTO crec (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
