'use client';
import { useState, useEffect } from 'react';

interface Servico {
  id: number;
  nome: string;
  preco: number;
}

function TableServico() {
  const [servicos, setServicos] = useState<Servico[]>([]);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/servicos');
        const data = await response.json();
        setServicos(data);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    };
    fetchServicos();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Lista de Serviços</h1>
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
            {servicos.map((servico) => (
              <tr key={servico.id} className="hover:bg-blue-50">
                <td className="border px-4 py-2">{servico.id}</td>
                <td className="border px-4 py-2">{servico.nome}</td>
                <td className="border px-4 py-2">{Number(servico.preco).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableServico;