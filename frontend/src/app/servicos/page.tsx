'use client';
import { useState } from "react";
import Card from "@/components/card";
import AtlServico from "@/components/Forms/AtlServico";
import CadServico from "@/components/Forms/CadServico";
import ExcServico from "@/components/Forms/ExcServico";
import TableServico from "@/components/Table/TableServico";

export default function Page() {
  const [cardSelecionado, setCardSelecionado] = useState("");

  const renderConteudo = () => {
    switch (cardSelecionado) {
      case "servico":
        return <CadServico />;
      case "atualiza":
        return <AtlServico />;
      case "excluir":
        return <ExcServico />;
      case "listar-servicos":
        return <TableServico />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-4xl font-bold mb-4">Serviços</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-6 p-8">
        <Card
          titulo="Cadastrar Serviço"
          descricao="Formulário para cadastro de serviço"
          onClick={() => setCardSelecionado("servico")}
        />
        <Card
          titulo="Atualizar Serviço"
          descricao="Formulário para atualizar dados do serviço"
          onClick={() => setCardSelecionado("atualiza")}
        />
        <Card
          titulo="Excluir Serviço"
          descricao="Formulário para excluir serviço"
          onClick={() => setCardSelecionado("excluir")}
        />
        <Card
          titulo="Listar todos os Serviços"
          descricao="Veja a lista de todos os serviços"
          onClick={() => setCardSelecionado("listar-servicos")}
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
