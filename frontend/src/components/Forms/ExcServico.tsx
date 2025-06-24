import React, { useState } from 'react';

const ExcServico = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) {
      alert('Por favor, informe o ID do serviço.');
      return;
    }
    if (!window.confirm(`Tem certeza que deseja excluir o serviço com ID ${id}?`)) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:3001/api/servicos/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Serviço excluído com sucesso!');
        setId('');
      } else {
        alert('Erro ao excluir serviço. Verifique se o ID está correto.');
      }
    } catch (error) {
      console.error("Erro:", error);
      alert('Erro de conexão.');
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Excluir Serviço</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID do serviço" className="border p-2 rounded text-black placeholder:text-gray-500" required/>
        <button type="submit" className="bg-red-600 text-white p-2 rounded hover:bg-red-700">Deletar</button>
      </form>
    </div>
  );
};

export default ExcServico;