-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE projetoARCD;
USE projetoARCD;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(120),
email VARCHAR(120),
cpf CHAR(11),
senha VARCHAR(45)
);

CREATE TABLE aluno (
idAluno INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
cpf CHAR(11) NOT NULL UNIQUE,
data_nascimento DATE NOT NULL,
faixa VARCHAR(30)  NOT NULL DEFAULT 'Branca',
pcd CHAR(3) NOT NULL,
transtorno CHAR (3) NOT NULL ,
observacoes VARCHAR(300),
CONSTRAINT chkPcd CHECK(pcd IN('sim','não')),
CONSTRAINT chkTranstorno CHECK(transtorno IN('sim','não'))
);

CREATE TABLE frequencia (
idFrequencia INT PRIMARY KEY AUTO_INCREMENT,
presente TINYINT(1),
data DATE,
fk_aluno INT,
fk_usuario INT,
FOREIGN KEY (fk_aluno) REFERENCES aluno(idAluno),
FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE nota (
id INT PRIMARY KEY AUTO_INCREMENT,
nota DECIMAL(4,2),
descricao  VARCHAR(150),
data DATE,
fk_aluno INT,
fk_usuario INT,
FOREIGN KEY (fk_aluno) REFERENCES aluno(idAluno),
FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

