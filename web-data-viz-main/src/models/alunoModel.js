var database = require("../database/config");

function listar(fkProfessor) {
    var instrucaoSql = `SELECT * FROM aluno WHERE fkProfessor = ${fkProfessor}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, data_nascimento, faixa, transtorno_pcd, observacao, fkProfessor) {  
    var instrucaoSql = `
        INSERT INTO aluno (nome, data_nascimento, faixa, transtorno_pcd, observacao, fkProfessor)
        VALUES ('${nome}', '${data_nascimento}', '${faixa}', '${transtorno_pcd}','${observacao}', ${fkProfessor})
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar
}