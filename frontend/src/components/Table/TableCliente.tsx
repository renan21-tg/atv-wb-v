'use client';
import { useState, useEffect } from 'react';

// Defina uma interface para o tipo Cliente
interface Cliente {
  nome: string;
  nomeSocial: string;
  cpf: string;
  genero: string;
}

function TableCliente() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchClientes = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/clientes');
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchClientes();
  }, []); // O array vazio faz com que o useEffect rode apenas uma vez

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Lista de Clientes</h1>
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
}

export default TableCliente;