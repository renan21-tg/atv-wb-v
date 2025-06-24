import React, { useState } from "react";

const AtlCliente: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [cliente, setCliente] = useState({ nome: '', nomeSocial: '', telefone: '' });

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cpf) {
      alert('Por favor, informe o CPF do cliente.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:3001/api/clientes/${cpf}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cliente),
      });
      if (response.ok) {
        alert('Cliente atualizado com sucesso!');
        setCpf('');
        setCliente({ nome: '', nomeSocial: '', telefone: '' });
      } else {
        alert('Erro ao atualizar cliente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Atualização de Cliente</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" value={cpf} onChange={handleCpfChange} placeholder="CPF do cliente a atualizar" className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <input type="text" name="nome" value={cliente.nome} onChange={handleDataChange} placeholder="Novo Nome" className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <input type="text" name="nomeSocial" value={cliente.nomeSocial} onChange={handleDataChange} placeholder="Novo Nome Social" className="border p-2 rounded text-black placeholder:text-gray-500" />
        <input type="text" name="telefone" value={cliente.telefone} onChange={handleDataChange} placeholder="Novo Telefone" className="border p-2 rounded text-black placeholder:text-gray-500" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Atualizar</button>
      </form>
    </div>
  );
};

export default AtlCliente;