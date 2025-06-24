import React, { useState } from "react";

const AtlProduto: React.FC = () => {
  const [id, setId] = useState('');
  const [dadosProduto, setDadosProduto] = useState({ nome: '', preco: '' });

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDadosProduto({ ...dadosProduto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) {
      alert('Por favor, informe o ID do produto.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:3001/api/produtos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: dadosProduto.nome,
          preco: parseFloat(dadosProduto.preco)
        }),
      });
      if (response.ok) {
        alert('Produto atualizado com sucesso!');
        setId('');
        setDadosProduto({ nome: '', preco: '' });
      } else {
        alert('Erro ao atualizar produto.');
      }
    } catch (error) {
      console.error("Erro:", error);
      alert('Erro de conexão.');
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Atualização de Produto</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="number" value={id} onChange={handleIdChange} placeholder="ID do produto a atualizar" className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <input type="text" name="nome" value={dadosProduto.nome} onChange={handleDataChange} placeholder="Novo nome do produto" className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <input type="number" name="preco" value={dadosProduto.preco} onChange={handleDataChange} placeholder="Novo preco em R$" step="0.01" className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Atualizar</button>
      </form>
    </div>
  );
};

export default AtlProduto;