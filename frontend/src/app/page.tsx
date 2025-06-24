'use client';
import { useState } from "react";
import Card from "@/components/card";
import CadCliente from "@/components/Forms/CadCliente";
import CadProduto from "@/components/Forms/CadProduto";
import CadServico from "@/components/Forms/CadServico";
import TableCliente from "@/components/Table/TableCliente";

const Page = () => {
  const [cardSelecionado, setCardSelecionado] = useState("");

  const renderConteudo = () => {
    switch (cardSelecionado) {
      case "cliente":
        return <CadCliente />;
      case "produto":
        return <CadProduto />;
      case "servico":
        return <CadServico />;
      case "listar-clientes":
        return <TableCliente />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-blue-600 text-4xl font-bold mb-4">Agenda Word Beauty</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-6 p-8">
        <Card
          titulo="Cadastrar Cliente"
          descricao="Formulário para cadastro de cliente"
          onClick={() => setCardSelecionado("cliente")}
        />
        <Card
          titulo="Cadastrar Produto"
          descricao="Formulário para cadastro de produto"
          onClick={() => setCardSelecionado("produto")}
        />
        <Card
          titulo="Cadastrar Serviço"
          descricao="Formulário para cadastro de serviço"
          onClick={() => setCardSelecionado("servico")}
        />
        <Card
          titulo="Listar todos os Clientes"
          descricao="Veja a lista de todos os clientes"
          onClick={() => setCardSelecionado("listar-clientes")}
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
};

export default Page;
