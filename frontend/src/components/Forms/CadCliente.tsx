import React, { useState } from "react";

const CadCliente: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    nomeSocial: '',
    telefone: '',
    cpf: '',
    dataCadastro: new Date().toISOString().split('T')[0], // Data de hoje
    genero: 'Masculino'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Cliente cadastrado com sucesso!');
        // Limpar o formulário ou redirecionar
      } else {
        const errorData = await response.json();
        alert(`Erro ao cadastrar cliente: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Erro no envio do formulário:', error);
      alert('Ocorreu um erro. Tente novamente.');
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-3xl font-bold mb-4">Cliente</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <input type="text" name="nomeSocial" placeholder="Nome Social" value={formData.nomeSocial} onChange={handleChange} className="border p-2 rounded text-black placeholder:text-gray-500" />
        <input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} className="border p-2 rounded text-black placeholder:text-gray-500" />
        <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <input type="date" name="dataCadastro" value={formData.dataCadastro} onChange={handleChange} className="border p-2 rounded text-black placeholder:text-gray-500" required />
        <div className="flex gap-6 items-center">
          <label className="flex items-center gap-2 text-black">
            <input type="radio" name="genero" value="Masculino" checked={formData.genero === 'Masculino'} onChange={handleChange} className="accent-blue-600" />
            Masculino
          </label>
          <label className="flex items-center gap-2 text-black">
            <input type="radio" name="genero" value="Feminino" checked={formData.genero === 'Feminino'} onChange={handleChange} className="accent-pink-500" />
            Feminino
          </label>
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Salvar</button>
      </form>
    </div>
  );
};

export default CadCliente;