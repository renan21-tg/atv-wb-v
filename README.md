# Requisitos

Node.js: v22.14.0 <br>
MySQL:  8.0.40

# Front-end

## Instalando o projeto

    git clone https://github.com/renan21-tg/atv-wb-v
    cd atv-wb-v
    cd frontend

## Instalando dependencias

    npm install

## Rodando

    npm run dev


# Back-end

## Instalando o projeto

    git clone https://github.com/renan21-tg/atv-wb-v
    cd atv-wb-v
    cd backend

## Instalando dependencias

    npm install

## Adicionando arquivo .env na raiz do projeto com as variaveis de ambiente necessarias

    DB_HOST=localhost
    DB_USER=seu_usuario_mysql
    DB_PASSWORD=sua_senha_mysql
    DB_NAME=seu_banco_de_dados_mysql
    PORT=3001

## Criando o banco de dados


    CREATE DATABASE IF NOT EXISTS world_beauty;
    
    USE world_beauty;
    
    CREATE TABLE IF NOT EXISTS clientes (
        cpf VARCHAR(14) PRIMARY KEY NOT NULL,
        nome VARCHAR(255) NOT NULL,
        nomeSocial VARCHAR(255),
        genero VARCHAR(50),
        dataCadastro DATE,
        telefone VARCHAR(20)
    );
    
    CREATE TABLE IF NOT EXISTS produtos (
        id INT PRIMARY KEY NOT NULL,
        nome VARCHAR(255) NOT NULL,
        preco DECIMAL(10, 2) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS servicos (
        id INT PRIMARY KEY NOT NULL,
        nome VARCHAR(255) NOT NULL,
        preco DECIMAL(10, 2) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS vendas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        cliente_cpf VARCHAR(14) NOT NULL,
        produto_id INT,
        servico_id INT,
        quantidade INT NOT NULL,
        valor_total DECIMAL(10, 2) NOT NULL,
        data_venda TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (cliente_cpf) REFERENCES clientes(cpf) ON DELETE CASCADE,
        FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE SET NULL,
        FOREIGN KEY (servico_id) REFERENCES servicos(id) ON DELETE SET NULL
    );

## Rodando

    npm run dev
