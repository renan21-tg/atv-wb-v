import React, { useState } from 'react';

const ExcCliente = () => {
  const [cpf, setCpf] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cpf) {
      alert('Por favor, informe o CPF.');
      return;
    }
    if (!window.confirm(`Tem certeza que deseja excluir o cliente com CPF ${cpf}?`)) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:3001/api/clientes/${cpf}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Cliente excluído com sucesso!');
        setCpf('');
      } else {
        alert('Erro ao excluir cliente. Verifique se o CPF está correto.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Excluir Cliente</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF do cliente a ser excluído" className="border p-2 rounded text-black placeholder:text-gray-500" />
        <button type="submit" className="bg-red-600 text-white p-2 rounded hover:bg-red-700">Deletar</button>
      </form>
    </div>
  );
};

export default ExcCliente;