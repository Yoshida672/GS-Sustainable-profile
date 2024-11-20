'use client';

import React, { useState } from "react";
import Link from "next/link";

const CadastroPage = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmaSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-black animate__animated animate__fadeIn">Cadastro de Usuário</h1>
        <div>
          {/* Link para a página Home */}
          <Link href="/" className="text-black mr-4 hover:underline transition-colors">
            Voltar à Página Inicial
          </Link>
        </div>
      </div>

      <div className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#21CCBC]">Preencha seus dados para se cadastrar</h2>

          <form onSubmit={handleSubmit}>
            {/* Campo de Nome */}
            <div className="mb-4">
              <label htmlFor="nome" className="block text-lg font-medium text-gray-700">Nome Completo</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="w-full p-3 mt-2 border-2 border-[#21CCBC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85F1B2]"
              />
            </div>

            {/* Campo de Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 mt-2 border-2 border-[#21CCBC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85F1B2]"
              />
            </div>

            {/* Campo de Senha */}
            <div className="mb-4">
              <label htmlFor="senha" className="block text-lg font-medium text-gray-700">Senha</label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                className="w-full p-3 mt-2 border-2 border-[#21CCBC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85F1B2]"
              />
            </div>

            {/* Campo de Confirmar Senha */}
            <div className="mb-4">
              <label htmlFor="confirmaSenha" className="block text-lg font-medium text-gray-700">Confirmar Senha</label>
              <input
                type="password"
                id="confirmaSenha"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
                required
                className="w-full p-3 mt-2 border-2 border-[#21CCBC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85F1B2]"
              />
            </div>

            {/* Botão de Cadastro */}
            <div className="mt-6">
              <button type="submit" className="w-full py-3 bg-[#21CCBC] text-white rounded-lg text-lg hover:bg-[#85F1B2] focus:outline-none focus:ring-2 focus:ring-[#B6DD6A]">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] text-black p-4 text-center">
        <p>&copy; 2024 Sparkuest - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default CadastroPage;
