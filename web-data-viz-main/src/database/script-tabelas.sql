-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/


CCREATE DATABASE projetoarcd;
USE projetoarcd;

CREATE TABLE endereco (
  idEndereco INT PRIMARY KEY AUTO_INCREMENT,
  Rua VARCHAR(45),
  Bairro VARCHAR(45),
  CEP CHAR(8),	
  numero INT
);

CREATE TABLE crec (
  id INT PRIMARY KEY AUTO_INCREMENT,
  razao_social VARCHAR(50),
  cnpj CHAR(14) UNIQUE,
  codigo_ativacao VARCHAR(50) UNIQUE,
  fkEndereco INT UNIQUE,
  FOREIGN KEY (fkEndereco) REFERENCES endereco(idEndereco)
);

CREATE TABLE professor (
  idProfessor INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  email VARCHAR(120) UNIQUE,
  senha VARCHAR(45),
  fk_crec INT,
  FOREIGN KEY (fk_crec) REFERENCES crec(id)
);

CREATE TABLE turma (
  idTurma INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  descricao VARCHAR(120)
);

CREATE TABLE professor_turma (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fkProfessor INT,
  fkTurma INT,
  FOREIGN KEY (fkProfessor) REFERENCES professor(idProfessor),
  FOREIGN KEY (fkTurma) REFERENCES turma(idTurma)
);

CREATE TABLE aluno (
  idAluno INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  email VARCHAR(120) UNIQUE,
  telefone CHAR(11),
  data_nascimento DATE,
  faixa VARCHAR(20),
  pcd VARCHAR(45),
  transtorno VARCHAR(45),
  status ENUM('Ativo', 'Inativo') DEFAULT 'Ativo',
  data_cadastro DATETIME DEFAULT NOW(),
  fkProfessor INT,
  FOREIGN KEY (fkProfessor) REFERENCES professor(idProfessor),
  fkTurma INT,
  FOREIGN KEY (fkTurma) REFERENCES turma(idTurma)
);

CREATE TABLE interessado (
  idInteressado INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  email VARCHAR(120),
  telefone CHAR(11),
  idade INT,
  modalidade VARCHAR(45),
  mensagem VARCHAR(500),
  data_cadastro DATETIME DEFAULT NOW(),
  fk_crec INT,
  FOREIGN KEY (fk_crec) REFERENCES crec(id)
);




