'use client';
import { useState, useEffect } from 'react';

interface Cliente {
  nome: string;
  nomeSocial: string;
  cpf: string;
  genero: string;
}

const ListarTodos = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/clientes');
        const data: Cliente[] = await response.json();
        // Ordena por gênero no frontend
        data.sort((a, b) => a.genero.localeCompare(b.genero));
        setClientes(data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Todos os Clientes</h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border text-center text-black bg-white rounded shadow">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="border px-4 py-2">Nome</th>
              <th className="border px-4 py-2">Nome Social</th>
              <th className="border px-4 py-2">CPF</th>
              <th className="border px-4 py-2">Gênero</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.cpf} className="hover:bg-blue-50">
                <td className="border px-4 py-2">{cliente.nome}</td>
                <td className="border px-4 py-2">{cliente.nomeSocial}</td>
                <td className="border px-4 py-2">{cliente.cpf}</td>
                <td className="border px-4 py-2">{cliente.genero}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListarTodos;