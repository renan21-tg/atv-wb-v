'use client';
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6 z-50">
      <div className="mb-10">
        <a href="/" className="text-2xl font-bold">Grupo WB</a>
      </div>
      <nav>
        <ul className="space-y-6">
          <li className="text-gray-300 hover:text-white transition cursor-pointer">
            <a href="/clientes">Clientes</a>
          </li>
          <li className="text-gray-300 hover:text-white transition cursor-pointer">
            <a href="/produtos">Produtos</a>
          </li>
          <li className="text-gray-300 hover:text-white transition cursor-pointer">
            <a href="/servicos">Serviços</a>
          </li>
          <li className="text-gray-300 hover:text-white transition cursor-pointer">
            <a href="/relatorios">Relatórios</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;