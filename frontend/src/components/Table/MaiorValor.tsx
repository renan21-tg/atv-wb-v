'use client';
import { useState, useEffect } from 'react';

interface ConsumidorValor {
  nome: string;
  valor: number;
}

const MaiorValor = () => {
  const [clientes, setClientes] = useState<ConsumidorValor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/relatorios/maior-valor');
        const data = await res.json();
        setClientes(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Maiores Consumidores (Valor)</h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border text-center text-black bg-white rounded shadow">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Valor Gasto (R$)</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, index) => (
              <tr key={index} className="hover:bg-blue-50">
                <td className="border px-4 py-2">{cliente.nome}</td>
                <td className="border px-4 py-2">{Number(cliente.valor).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaiorValor;