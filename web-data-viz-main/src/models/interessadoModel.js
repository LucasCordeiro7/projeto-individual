var database = require("../database/config");

function cadastrar(nome, email, telefone, idade, modalidade, mensagem, fk_crec) {
    var instrucaoSql = `
        INSERT INTO interessado (nome, email, telefone, idade, modalidade, mensagem, fk_crec)
        VALUES ('${nome}', '${email}', '${telefone}', '${idade}', '${modalidade}', '${mensagem}', ${fk_crec})
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {
    var instrucaoSql = `
        SELECT nome, email, telefone, idade, modalidade, data_cadastro 
        FROM interessado
        ORDER BY data_cadastro DESC
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar
}