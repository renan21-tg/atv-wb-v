'use client';
import React, { useState, useEffect } from "react";

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

interface Servico {
    id: number;
    nome: string;
    preco: number;
}

const RegistrarConsumo: React.FC = () => {
    const [cpf, setCpf] = useState('');
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [servicos, setServicos] = useState<Servico[]>([]);
    const [produtosConsumo, setProdutosConsumo] = useState<{ [key: number]: number }>({});
    const [servicosConsumo, setServicosConsumo] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/produtos');
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        const fetchServicos = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/servicos');
                const data = await response.json();
                setServicos(data);
            } catch (error) {
                console.error("Erro ao buscar serviços:", error);
            }
        };

        fetchProdutos();
        fetchServicos();
    }, []);

    const handleProdutoChange = (id: number, quantidade: number) => {
        setProdutosConsumo(prevState => ({ ...prevState, [id]: quantidade }));
    };

    const handleServicoChange = (id: number, quantidade: number) => {
        setServicosConsumo(prevState => ({ ...prevState, [id]: quantidade }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const produtosParaEnviar = Object.entries(produtosConsumo)
            .filter(([, quantidade]) => quantidade > 0)
            .map(([id, quantidade]) => ({ id: Number(id), quantidade }));

        const servicosParaEnviar = Object.entries(servicosConsumo)
            .filter(([, quantidade]) => quantidade > 0)
            .map(([id, quantidade]) => ({ id: Number(id), quantidade }));

        if (produtosParaEnviar.length === 0 && servicosParaEnviar.length === 0) {
            alert('Por favor, selecione pelo menos um produto ou serviço.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/vendas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cliente_cpf: cpf,
                    produtos: produtosParaEnviar,
                    servicos: servicosParaEnviar,
                }),
            });

            if (response.ok) {
                alert('Consumo registrado com sucesso!');
                setCpf('');
                setProdutosConsumo({});
                setServicosConsumo({});
            } else {
                const errorData = await response.json();
                alert(`Erro ao registrar consumo: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Erro no envio do formulário:', error);
            alert('Ocorreu um erro de conexão. Tente novamente.');
        }
    };

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-blue-600 text-3xl font-bold mb-4">Registrar Consumo</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="CPF do Cliente"
                    className="border p-2 rounded text-black placeholder:text-gray-500"
                    required
                />

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Produtos</h2>
                    {produtos.map(produto => (
                        <div key={produto.id} className="flex items-center justify-between mb-2">
                            <span className="text-black">{produto.nome} - R$ {Number(produto.preco).toFixed(2)}</span>
                            <input
                                type="number"
                                placeholder="Qtd"
                                min="0"
                                value={produtosConsumo[produto.id] || ''}
                                onChange={(e) => handleProdutoChange(produto.id, parseInt(e.target.value) || 0)}
                                className="border p-1 rounded text-black placeholder:text-gray-500 w-20"
                            />
                        </div>
                    ))}
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Serviços</h2>
                    {servicos.map(servico => (
                        <div key={servico.id} className="flex items-center justify-between mb-2">
                            <span className="text-black">{servico.nome} - R$ {Number(servico.preco).toFixed(2)}</span>
                            <input
                                type="number"
                                placeholder="Qtd"
                                min="0"
                                value={servicosConsumo[servico.id] || ''}
                                onChange={(e) => handleServicoChange(servico.id, parseInt(e.target.value) || 0)}
                                className="border p-1 rounded text-black placeholder:text-gray-500 w-20"
                            />
                        </div>
                    ))}
                </div>

                <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    Registrar
                </button>
            </form>
        </div>
    );
};

export default RegistrarConsumo;