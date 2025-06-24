import React from "react";

type Props = {
  titulo: string;
  descricao: string;
  onClick: () => void;
};

const Card: React.FC<Props> = ({ titulo, descricao, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{titulo}</h2>
      <p className="text-gray-600 mb-4">{descricao}</p>
      <button
        onClick={onClick}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Ver mais
      </button>
    </div>
  );
};

export default Card;