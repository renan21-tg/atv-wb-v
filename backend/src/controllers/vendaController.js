import pool from '../database/db.js';

export const createVenda = async (req, res) => {
    const { cliente_cpf, produtos, servicos } = req.body;

    if (!cliente_cpf || (!produtos && !servicos)) {
        return res.status(400).json({ message: 'Dados insuficientes para registrar a venda.' });
    }

    const connection = await pool.getConnection();

    try {
        await connection.beginTransaction();

        let valor_total_venda = 0;

        // Processar produtos
        if (produtos && produtos.length > 0) {
            for (const item of produtos) {
                const [produtoRows] = await connection.query('SELECT preco FROM produtos WHERE id = ?', [item.id]);
                if (produtoRows.length > 0) {
                    const preco_produto = produtoRows[0].preco;
                    const valor_total_item = preco_produto * item.quantidade;
                    valor_total_venda += valor_total_item;

                    await connection.query(
                        'INSERT INTO vendas (cliente_cpf, produto_id, quantidade, valor_total) VALUES (?, ?, ?, ?)',
                        [cliente_cpf, item.id, item.quantidade, valor_total_item]
                    );
                }
            }
        }

        // Processar serviços
        if (servicos && servicos.length > 0) {
            for (const item of servicos) {
                const [servicoRows] = await connection.query('SELECT preco FROM servicos WHERE id = ?', [item.id]);
                if (servicoRows.length > 0) {
                    const preco_servico = servicoRows[0].preco;
                    const valor_total_item = preco_servico * item.quantidade;
                    valor_total_venda += valor_total_item;

                    await connection.query(
                        'INSERT INTO vendas (cliente_cpf, servico_id, quantidade, valor_total) VALUES (?, ?, ?, ?)',
                        [cliente_cpf, item.id, item.quantidade, valor_total_item]
                    );
                }
            }
        }

        await connection.commit();
        res.status(201).json({ message: 'Venda registrada com sucesso!' });

    } catch (error) {
        await connection.rollback();
        console.error('Erro ao registrar venda:', error);
        res.status(500).json({ message: 'Erro ao registrar venda', error });
    } finally {
        connection.release();
    }
};