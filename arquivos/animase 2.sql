

#DROP DATABASE IF EXISTS `anima_se`;

CREATE DATABASE  IF NOT EXISTS `anima_se`;
USE `anima_se`;


#DROP TABLE IF EXISTS `tb_telefone`;

CREATE TABLE `tb_telefone` (
  `id_tel` smallint NOT NULL AUTO_INCREMENT,
  `tipo_tel` varchar(30) DEFAULT NULL,
  `num_tel` char(11) NOT NULL,
  PRIMARY KEY (`id_tel`),
  UNIQUE KEY `id_tel` (`id_tel`)
);



#DROP TABLE IF EXISTS `tb_endereco`;

CREATE TABLE `tb_endereco` (
  `id_endereco` smallint NOT NULL AUTO_INCREMENT,
  `num_casa` varchar(10) DEFAULT NULL,
  `logradouro` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `UF` char(2) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  PRIMARY KEY (`id_endereco`),
  UNIQUE KEY `id_endereco` (`id_endereco`)
);



#DROP TABLE IF EXISTS `tb_ong`;

CREATE TABLE `tb_ong` (
  `id_ong` smallint NOT NULL AUTO_INCREMENT,
  `face_ong` varchar(255) DEFAULT NULL,
  `insta_ong` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_ong`),
  UNIQUE KEY `id_ong` (`id_ong`)
);



#DROP TABLE IF EXISTS `tb_pessoa`;

CREATE TABLE `tb_pessoa` (
  `id_pessoa` smallint NOT NULL AUTO_INCREMENT,
  `cpf_pessoa` char(11) NOT NULL,
  `genero_pessoa` varchar(255) DEFAULT NULL,
  `estado_civil` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_pessoa`),
  UNIQUE KEY `id_pessoa` (`id_pessoa`),
  UNIQUE KEY `cpf_pessoa` (`cpf_pessoa`)
);



#DROP TABLE IF EXISTS `tb_animal`;

CREATE TABLE `tb_animal` (
  `id_animal` smallint NOT NULL AUTO_INCREMENT,
  `nome_animal` varchar(255) NOT NULL,
  `genero_animal` varchar(255) NOT NULL,
  `raca_animal` varchar(255) DEFAULT NULL,
  `peso_animal` float DEFAULT NULL,
  `classificacao_animal` varchar(255) NOT NULL,
  `desc_animal` varchar(255) NOT NULL,
  `documento_animal` varchar(255) DEFAULT NULL,
  `tipo_doc` varchar(255) DEFAULT NULL,
  `id_ong` smallint DEFAULT NULL,
  `id_pessoa` smallint DEFAULT NULL,
  PRIMARY KEY (`id_animal`),
  UNIQUE KEY `id_animal` (`id_animal`),
  KEY `id_ong` (`id_ong`),
  KEY `id_pessoa` (`id_pessoa`)
) ;



#DROP TABLE IF EXISTS `tb_usuario`;

CREATE TABLE `tb_usuario` (
  `id_usuario` smallint NOT NULL AUTO_INCREMENT,
  `id_ong` smallint DEFAULT NULL,
  `id_pessoa` smallint DEFAULT NULL,
  `id_tel` smallint DEFAULT NULL,
  `id_animal` smallint DEFAULT NULL,
  `id_endereco` smallint DEFAULT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `nascimento` date NOT NULL,
  `senha` varchar(255) NOT NULL,
  `imagem` longblob,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `id_usuario` (`id_usuario`),
  KEY `id_endereco` (`id_endereco`),
  KEY `id_ong` (`id_ong`),
  KEY `id_pessoa` (`id_pessoa`),
  KEY `id_animal` (`id_animal`),
  KEY `id_tel` (`id_tel`)
);



#DROP TABLE IF EXISTS `tb_pedido_animal`;

CREATE TABLE `tb_pedido_animal` (
  `id_pedido_animal` smallint NOT NULL AUTO_INCREMENT,
  `id_animal` smallint DEFAULT NULL,
  `id_usuario` smallint DEFAULT NULL,
  `data_pedido` date NOT NULL,
  `nome_adotador` varchar(255) NOT NULL,
  `nome_doador` varchar(255) NOT NULL,
  `email_adotante` varchar(255) NOT NULL,
  `email_doador` varchar(255) NOT NULL,
  PRIMARY KEY (`id_pedido_animal`),
  UNIQUE KEY `id_pedido_animal` (`id_pedido_animal`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_animal` (`id_animal`)
);



#DROP TABLE IF EXISTS `tb_publicacao`;

CREATE TABLE `tb_publicacao` (
  `id_publicacao` smallint NOT NULL AUTO_INCREMENT,
  `titulo_publicacao` varchar(255) NOT NULL,
  `desc_publicacao` text NOT NULL,
  `data_criacao` date NOT NULL,
  `id_animal` smallint DEFAULT NULL,
  `id_usuario` smallint DEFAULT NULL,
  PRIMARY KEY (`id_publicacao`),
  UNIQUE KEY `id_publicacao` (`id_publicacao`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_animal` (`id_animal`)
);



ALTER TABLE `tb_animal` ADD CONSTRAINT `tb_animal_ibfk_1` FOREIGN KEY (`id_ong`) REFERENCES `tb_ong` (`id_ong`);
ALTER TABLE `tb_animal` ADD CONSTRAINT `tb_animal_ibfk_2` FOREIGN KEY (`id_pessoa`) REFERENCES `tb_pessoa` (`id_pessoa`);

ALTER TABLE `tb_usuario` ADD CONSTRAINT `tb_usuario_ibfk_1` FOREIGN KEY (`id_endereco`) REFERENCES `tb_endereco` (`id_endereco`);
ALTER TABLE `tb_usuario` ADD CONSTRAINT `tb_usuario_ibfk_2` FOREIGN KEY (`id_ong`) REFERENCES `tb_ong` (`id_ong`);
ALTER TABLE `tb_usuario` ADD CONSTRAINT `tb_usuario_ibfk_3` FOREIGN KEY (`id_pessoa`) REFERENCES `tb_pessoa` (`id_pessoa`);
ALTER TABLE `tb_usuario` ADD CONSTRAINT `tb_usuario_ibfk_4` FOREIGN KEY (`id_animal`) REFERENCES `tb_animal` (`id_animal`);
ALTER TABLE `tb_usuario` ADD CONSTRAINT `tb_usuario_ibfk_5` FOREIGN KEY (`id_tel`) REFERENCES `tb_telefone` (`id_tel`);

ALTER TABLE `tb_pedido_animal` ADD CONSTRAINT `tb_pedido_animal_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuario` (`id_usuario`);
ALTER TABLE `tb_pedido_animal` ADD CONSTRAINT `tb_pedido_animal_ibfk_2` FOREIGN KEY (`id_animal`) REFERENCES `tb_animal` (`id_animal`);

ALTER TABLE `tb_publicacao` ADD CONSTRAINT `tb_publicacao_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuario` (`id_usuario`);
ALTER TABLE `tb_publicacao` ADD CONSTRAINT `tb_publicacao_ibfk_2` FOREIGN KEY (`id_animal`) REFERENCES `tb_animal` (`id_animal`);




#DROP TABLE IF EXISTS `tb_chat`;

/*CREATE TABLE `tb_chat` (
  `id_chat` smallint NOT NULL AUTO_INCREMENT,
  `id_publicacao` smallint DEFAULT NULL,
  `id_usuario` smallint DEFAULT NULL,
  `msg` varchar(255) DEFAULT NULL,
  `datamensagem` datetime DEFAULT NULL,
  `resposta` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_chat`),
  UNIQUE KEY `id_chat` (`id_chat`),
  KEY `id_publicacao` (`id_publicacao`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `tb_chat_ibfk_1` FOREIGN KEY (`id_publicacao`) REFERENCES `tb_publicacao` (`id_publicacao`),
  CONSTRAINT `tb_chat_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuario` (`id_usuario`)
);*/



#DROP TABLE IF EXISTS `tb_cursos`;

/*CREATE TABLE `tb_cursos` (
  `id_curso` smallint NOT NULL AUTO_INCREMENT,
  `nome_curso` varchar(255) NOT NULL,
  `sub_titulo_curso` varchar(255) DEFAULT NULL,
  `desc_curso` text NOT NULL,
  `preco` float NOT NULL,
  `categoria_curso` varchar(255) NOT NULL,
  PRIMARY KEY (`id_curso`),
  UNIQUE KEY `id_curso` (`id_curso`)
);*/



#DROP TABLE IF EXISTS `tb_especificacoes`;

/*CREATE TABLE `tb_especificacoes` (
  `id_especificacoes` smallint NOT NULL AUTO_INCREMENT,
  `indicacao` varchar(255) DEFAULT NULL,
  `porte` varchar(255) DEFAULT NULL,
  `idade` varchar(255) DEFAULT NULL,
  `tipo_pet` varchar(255) DEFAULT NULL,
  `composicao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_especificacoes`),
  UNIQUE KEY `id_especificacoes` (`id_especificacoes`)
);*/



#DROP TABLE IF EXISTS `tb_frete`;

/*CREATE TABLE `tb_frete` (
  `id_frete` smallint NOT NULL AUTO_INCREMENT,
  `valor_frete` float NOT NULL,
  PRIMARY KEY (`id_frete`),
  UNIQUE KEY `id_frete` (`id_frete`)
);*/



#DROP TABLE IF EXISTS `tb_pagamento`;

/*CREATE TABLE `tb_pagamento` (
  `id_pagamento` smallint NOT NULL AUTO_INCREMENT,
  `id_usuario` smallint DEFAULT NULL,
  `id_pedido` smallint DEFAULT NULL,
  `id_frete` smallint DEFAULT NULL,
  `nome_cartao` varchar(255) NOT NULL,
  `numero_cartao` char(16) NOT NULL,
  `validade_cartao` date NOT NULL,
  `cvv_cartao` char(3) NOT NULL,
  `forma_pagamento` varchar(20) NOT NULL,
  `parcela_pagemento` tinyint NOT NULL,
  PRIMARY KEY (`id_pagamento`),
  UNIQUE KEY `id_pagamento` (`id_pagamento`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_frete` (`id_frete`),
  KEY `id_pedido` (`id_pedido`),
  CONSTRAINT `id_pedido` FOREIGN KEY (`id_pedido`) REFERENCES `tb_pedido_market` (`id_pedido`),
  CONSTRAINT `tb_pagamento_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuario` (`id_usuario`),
  CONSTRAINT `tb_pagamento_ibfk_2` FOREIGN KEY (`id_frete`) REFERENCES `tb_frete` (`id_frete`)
);*/



# TABLE IF EXISTS `tb_pedido_market`;

/*CREATE TABLE `tb_pedido_market` (
  `id_pedido` smallint NOT NULL AUTO_INCREMENT,
  `itens_pedido` text NOT NULL,
  `preco_pedido` float NOT NULL,
  `qtde_pedido` smallint NOT NULL,
  `valor_frete` float DEFAULT NULL,
  `data_pedido` date NOT NULL,
  `id_endereco` smallint DEFAULT NULL,
  `id_usuario` smallint DEFAULT NULL,
  `id_curso` smallint DEFAULT NULL,
  `id_produto` smallint DEFAULT NULL,
  `id_pagamento` smallint DEFAULT NULL,
  PRIMARY KEY (`id_pedido`),
  UNIQUE KEY `id_pedido` (`id_pedido`),
  KEY `id_endereco` (`id_endereco`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_curso` (`id_curso`),
  KEY `id_produto` (`id_produto`),
  KEY `id_pagamento` (`id_pagamento`),
  CONSTRAINT `tb_pedido_market_ibfk_1` FOREIGN KEY (`id_endereco`) REFERENCES `tb_endereco` (`id_endereco`),
  CONSTRAINT `tb_pedido_market_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `tb_usuario` (`id_usuario`),
  CONSTRAINT `tb_pedido_market_ibfk_3` FOREIGN KEY (`id_curso`) REFERENCES `tb_cursos` (`id_curso`),
  CONSTRAINT `tb_pedido_market_ibfk_4` FOREIGN KEY (`id_produto`) REFERENCES `tb_produto` (`id_produto`),
  CONSTRAINT `tb_pedido_market_ibfk_5` FOREIGN KEY (`id_pagamento`) REFERENCES `tb_pagamento` (`id_pagamento`)
);*/



#DROP TABLE IF EXISTS `tb_produto`;

/*CREATE TABLE `tb_produto` (
  `id_produto` smallint NOT NULL AUTO_INCREMENT,
  `nome_produto` varchar(255) NOT NULL,
  `marca_produto` varchar(255) NOT NULL,
  `desc_produto` text NOT NULL,
  `categoria_produto` varchar(255) NOT NULL,
  `preco_produto` float NOT NULL,
  `estoque_produto` smallint NOT NULL,
  `desc_detalhada_produto` text,
  `id_especificacoes` smallint DEFAULT NULL,
  `img_produto` longblob NOT NULL,
  `peso` float DEFAULT NULL,
  PRIMARY KEY (`id_produto`),
  UNIQUE KEY `id_produto` (`id_produto`),
  KEY `id_especificacoes` (`id_especificacoes`),
  CONSTRAINT `tb_produto_ibfk_1` FOREIGN KEY (`id_especificacoes`) REFERENCES `tb_especificacoes` (`id_especificacoes`)
);*/
