var database = require("../database/config");

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT idUsuario, nome, email 
        FROM usuario 
        WHERE email = '${email}' AND senha = '${senha}';
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, cpf, senha) {
        console.log('entrou no model');
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, cpf, senha) 
        VALUES ('${nome}', '${email}', '${cpf}', '${senha}');
    `;
    return database.executar(instrucaoSql);
}

function listar() {
    var instrucaoSql = `SELECT * FROM usuario`;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};
