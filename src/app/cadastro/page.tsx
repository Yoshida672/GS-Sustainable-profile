"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CadastroPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmaSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    setLoading(true);

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        router.push("/perfil");
      } else {
        const errorData = await response.json();
        console.error("Erro ao realizar cadastro:", errorData);
        alert(errorData.message || "Erro ao realizar cadastro.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao realizar cadastro.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-black">
          Cadastro de Usuário
        </h1>
        <Link href="/" className="text-black hover:underline transition-colors">
          Voltar à Página Inicial
        </Link>
      </div>

      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <span className="text-sm mt-2 text-[#21CCBC]">Etapa 1</span>
          </div>
          <div className="h-[2px] w-10 bg-gray-300"></div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <span className="text-sm mt-2 text-gray-400">Etapa 2</span>
          </div>
        </div>
      </div>

      <div className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#21CCBC]">
            Preencha seus dados
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-lg font-medium text-gray-700"
              >
                Nome de Usuário
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-3 mt-2 border-2 border-[#21CCBC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85F1B2]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 mt-2 border-2 border-[#21CCBC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85F1B2]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 mt-2 border-2 border-[#21CCBC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85F1B2]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmaSenha"
                className="block text-lg font-medium text-gray-700"
              >
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirmaSenha"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
                required
                className="w-full p-3 mt-2 border-2 border-[#21CCBC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#85F1B2]"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 bg-[#21CCBC] text-white rounded-lg text-lg hover:bg-[#85F1B2] focus:outline-none focus:ring-2 focus:ring-[#B6DD6A]"
                disabled={loading}
              >
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] text-black p-4 text-center">
        <p>&copy; 2024 Sparkuest - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
