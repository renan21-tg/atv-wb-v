USE world_beauty;

INSERT INTO produtos (id, nome, preco) VALUES
(1, 'Shampoo', 20.00),
(2, 'Condicionador', 25.00),
(3, 'Escova', 15.00),
(4, 'Tinta', 40.00),
(5, 'Gel Modelador', 18.00);

INSERT INTO servicos (id, nome, preco) VALUES
(1, 'Corte M', 40.00),
(2, 'Corte F', 60.00),
(3, 'Barba', 30.00),
(4, 'Pintura', 80.00),
(5, 'Manicure', 25.00);

INSERT INTO clientes (nome, nomeSocial, cpf, genero, dataCadastro, telefone) VALUES
('João Silva', 'João', '123.456.789-00', 'Masculino', '2023-01-10', '11987654321'),
('Maria Oliveira', 'Maria', '987.654.321-00', 'Feminino', '2023-02-15', '11912345678'),
('Carlos Pereira', 'Carlos', '321.654.987-11', 'Masculino', '2023-03-20', '12987651234'),
('Ana Souza', 'Ana', '456.789.123-22', 'Feminino', '2023-04-25', '12912348765'),
('Pedro Lima', 'Pedro', '654.321.987-33', 'Masculino', '2023-05-30', '11955554444'),
('Juliana Costa', 'Jú', '789.123.456-44', 'Feminino', '2023-06-05', '11966667777'),
('Lucas Rocha', 'Luk', '147.258.369-55', 'Masculino', '2023-07-12', '12933332222'),
('Fernanda Ramos', 'Fer', '963.852.741-66', 'Feminino', '2023-08-18', '11922223333'),
('Rafael Almeida', 'Rafa', '852.741.963-77', 'Masculino', '2023-09-21', '12999998888'),
('Beatriz Martins', 'Bia', '741.963.852-88', 'Feminino', '2023-10-28', '11977776666');

INSERT INTO vendas (cliente_cpf, produto_id, servico_id, quantidade, valor_total, data_venda) VALUES
-- Compras de João Silva 
('123.456.789-00', 1, NULL, 5, 100.00, '2024-01-20'), 
('123.456.789-00', NULL, 1, 2, 80.00, '2024-02-10'),  
('123.456.789-00', NULL, 3, 3, 90.00, '2024-03-15'),  
('123.456.789-00', 5, NULL, 4, 72.00, '2024-04-05'),  

-- Compras de Maria Oliveira
('987.654.321-00', NULL, 2, 2, 120.00, '2024-01-25'), 
('987.654.321-00', 2, NULL, 3, 75.00, '2024-02-18'),  
('987.654.321-00', NULL, 5, 1, 25.00, '2024-02-18'),  

-- Compras de Carlos Pereira
('321.654.987-11', NULL, 1, 1, 40.00, '2024-03-22'), 
('321.654.987-11', NULL, 3, 1, 30.00, '2024-03-22'), 

-- Compras de Ana Souza
('456.789.123-22', NULL, 4, 1, 80.00, '2024-04-30'),  
('456.789.123-22', 4, NULL, 2, 80.00, '2024-04-30'),  

-- Compras de Juliana Costa
('789.123.456-44', NULL, 5, 4, 100.00, '2024-05-10'), 

-- Compra de Beatriz Martins 
('741.963.852-88', 3, NULL, 1, 15.00, '2024-06-01'); 