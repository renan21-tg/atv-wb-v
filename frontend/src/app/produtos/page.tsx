'use client';
import { useState } from 'react';
import Card from "@/components/card";
import CadProduto from "@/components/Forms/CadProduto";
import ExcProduto from "@/components/Forms/ExcProduto";
import TableProduto from "@/components/Table/TableProduto";
import AtlProduto from '@/components/Forms/AtlProdut';

function Page() {
  const [cardSelecionado, setCardSelecionado] = useState("");

  const renderConteudo = () => {
    switch (cardSelecionado) {
      case "produto":
        return <CadProduto />;
      case "atualiza":
        return <AtlProduto />;
      case "excluir":
        return <ExcProduto />;
      case "listar-produtos":
        return <TableProduto />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-4xl font-bold mb-4">Produtos</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-6 p-8">
        <Card
          titulo="Cadastrar Produto"
          descricao="Formulário para cadastro de produto"
          onClick={() => setCardSelecionado("produto")}
        />
        <Card
          titulo="Atualizar Produto"
          descricao="Formulário para atualizar dados do produto"
          onClick={() => setCardSelecionado("atualiza")}
        />
        <Card
          titulo="Excluir Produto"
          descricao="Formulário para excluir produto"
          onClick={() => setCardSelecionado("excluir")}
        />
        <Card
          titulo="Listar todos os Produtos"
          descricao="Veja a lista de todos os produtos"
          onClick={() => setCardSelecionado("listar-produtos")}
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

export default Page;
