var database = require("../database/config");

function listar(fkProfessor) {
    var instrucaoSql = `SELECT * FROM aluno WHERE fkProfessor = ${fkProfessor}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, dataNascimento, faixa, pcd, transtorno, status, fkProfessor) {
    var instrucaoSql = `
        INSERT INTO aluno (nome, data_nascimento, faixa, pcd, transtorno, status, fkProfessor)
        VALUES ('${nome}', '${dataNascimento}', '${faixa}', '${pcd}', '${transtorno}', '${status}', ${fkProfessor})
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar
}