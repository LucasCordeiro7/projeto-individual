-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE projetoarcd;
USE projetoarcd;

CREATE TABLE crec (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE professor (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(120),
senha VARCHAR(45),
fk_crec INT,
FOREIGN KEY (fk_crec) REFERENCES crec(id)
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

