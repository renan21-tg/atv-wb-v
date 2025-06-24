'use client';
import { useState, useEffect } from 'react';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

function TableProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

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
    fetchProdutos();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Lista de Produtos</h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border text-center text-black bg-white rounded shadow">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Preço (R$)</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id} className="hover:bg-blue-50">
                <td className="border px-4 py-2">{produto.id}</td>
                <td className="border px-4 py-2">{produto.nome}</td>
                <td className="border px-4 py-2">{Number(produto.preco).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableProduto;