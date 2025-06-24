import React, { useState } from "react";

const CadProduto = () => {
  const [formData, setFormData] = useState({ id: '', nome: '', preco: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: Number(formData.id),
          nome: formData.nome,
          preco: parseFloat(formData.preco)
        }),
      });
      if (response.ok) {
        alert('Produto cadastrado com sucesso!');
        setFormData({ id: '', nome: '', preco: '' });
      } else {
        alert('Erro ao cadastrar produto.');
      }
    } catch (error) {
      console.error("Erro:", error);
      alert('Erro de conexão.');
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Cadastro de Produto</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="number" name="id" value={formData.id} onChange={handleChange} placeholder="Id do Produto" className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome do Produto" className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <input type="number" name="preco" value={formData.preco} onChange={handleChange} placeholder="Preco em R$" step="0.01" className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Salvar</button>
      </form>
    </div>
  );
};

export default CadProduto;