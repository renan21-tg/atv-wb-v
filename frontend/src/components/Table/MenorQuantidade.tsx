'use client';
import { useState, useEffect } from 'react';

interface Consumidor {
  nome: string;
  quantidade: number;
}

function MenorQuantidade() {
  const [clientes, setClientes] = useState<Consumidor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/relatorios/menor-quantidade');
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
        <h1 className="text-blue-600 text-3xl font-bold mb-4">
          Menores Consumidores (Quantidade)
        </h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border text-center text-black bg-white rounded shadow">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Quantidade Consumida</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, index) => (
              <tr key={index} className="hover:bg-blue-50">
                <td className="border px-4 py-2">{cliente.nome}</td>
                <td className="border px-4 py-2">{cliente.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenorQuantidade;