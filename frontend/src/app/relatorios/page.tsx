'use client';
import { useState } from "react";
import Card from "@/components/card";
import ComprasGenero from "@/components/Table/ComprasGenero";
import Geral from "@/components/Table/Geral";
import ListarTodos from "@/components/Table/ListarTodos";
import MaiorQuantidade from "@/components/Table/MaiorQuantidade";
import MaiorValor from "@/components/Table/MaiorValor";
import MenorQuantidade from "@/components/Table/MenorQuantidade";

export default function Page() {
  const [cardSelecionado, setCardSelecionado] = useState("");

  const renderConteudo = () => {
    switch (cardSelecionado) {
      case "maior-quantidade":
        return <MaiorQuantidade />;
      case "listar-todos":
        return <ListarTodos />;
      case "geral":
        return <Geral />;
      case "compras-genero":
        return <ComprasGenero />;
      case "menor-quantidade":
        return <MenorQuantidade />;
      case "maior-valor":
        return <MaiorValor />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-4xl font-bold mb-4">Relatórios</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-6 p-8">
        <Card
          titulo="Maiores consumidores em quantidade"
          descricao="Liste os 10 clientes que mais compraram (em quantidade, não valor)."
          onClick={() => setCardSelecionado('maior-quantidade')}
        />
        <Card
          titulo="Listar todos os clientes"
          descricao="Liste todos os clientes cadastrados, ordenados por gênero."
          onClick={() => setCardSelecionado('listar-todos')}
        />
        <Card
          titulo="Produtos e serviços mais consumidos"
          descricao="Liste os produtos e serviços mais consumidos no geral."
          onClick={() => setCardSelecionado('geral')}
        />
        <Card
          titulo="Produtos e serviços por gênero"
          descricao="Liste os produtos e serviços mais consumidos por gênero."
          onClick={() => setCardSelecionado('compras-genero')}
        />
        <Card
          titulo="Menores consumidores em quantidade"
          descricao="Liste os 10 clientes que menos compraram (em quantidade, não valor)."
          onClick={() => setCardSelecionado('menor-quantidade')}
        />
        <Card
          titulo="Maiores consumidores em valor"
          descricao="Liste os 5 clientes que mais gastaram."
          onClick={() => setCardSelecionado('maior-valor')}
        />
      </div>

      <div className="flex justify-center">
        {cardSelecionado && (
          <div className="mt-6 p-4 bg-gray-100 rounded-xl w-full max-w-2xl">
            {renderConteudo()}
          </div>
        )}
      </div>
    </div>
  );
}