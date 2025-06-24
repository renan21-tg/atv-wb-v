import React, { useState } from "react";

const AtlServico: React.FC = () => {
  const [id, setId] = useState('');
  const [dadosServico, setDadosServico] = useState({ nome: '', preco: '' });

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDadosServico({ ...dadosServico, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) {
      alert('Por favor, informe o ID do serviço.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:3001/api/servicos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: dadosServico.nome,
          preco: parseFloat(dadosServico.preco)
        }),
      });
      if (response.ok) {
        alert('Serviço atualizado com sucesso!');
        setId('');
        setDadosServico({ nome: '', preco: '' });
      } else {
        alert('Erro ao atualizar serviço.');
      }
    } catch (error) {
      console.error("Erro:", error);
      alert('Erro de conexão.');
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Atualização de Serviço</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="number" value={id} onChange={handleIdChange} placeholder="ID do serviço a atualizar" className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <input type="text" name="nome" value={dadosServico.nome} onChange={handleDataChange} placeholder="Novo nome do serviço" className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <input type="number" name="preco" value={dadosServico.preco} onChange={handleDataChange} placeholder="Novo preco em R$" step="0.01" className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Atualizar</button>
      </form>
    </div>
  );
};

export default AtlServico;