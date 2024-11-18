'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

const HomePage = () => {
  const [isModule1Completed, setIsModule1Completed] = useState(false);

  useEffect(() => {
    // Verifica se o Módulo 1 foi completado no localStorage
    const module1Status = localStorage.getItem("module1Completed");
    if (module1Status === "true") {
      setIsModule1Completed(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#E8F9F1]"> {/* Fundo mais suave com cor relacionada ao tema */}
      {/* Header */}
      <header className="bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] text-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl text-black font-bold">Sparkuest</h1>
          <div>
            <Link href="/sobre-nos" className="mr-4 hover:underline text-black">
              Sobre Nós
            </Link>
            <Link href="/cadastro" className="hover:underline text-black">
              Cadastro
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h2 className="text-3xl font-semibold text-black mb-8">
          Escolha um Módulo para Começar
        </h2>

        <div className="flex flex-col items-center w-full max-w-md space-y-6">
          {/* Módulo 1 */}
          <div className="w-full p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black">Módulo 1: Introdução à Energia Sustentável</h3>
            <p className="mt-4 text-black">
              Comece sua jornada para entender a energia sustentável e seus impactos.
            </p>
            <Link href="/game/module/0">
              <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">
                Iniciar Módulo 1
              </button>
            </Link>
          </div>

          {/* Módulo 2 - Aparece somente se o Módulo 1 for completado */}
          {isModule1Completed ? (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black">Módulo 2: Energia Renovável vs. Não Renovável</h3>
              <p className="mt-4 text-black">
                Entenda as diferenças e os impactos ambientais das fontes de energia.
              </p>
              <Link href="/game/module/1">
                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">
                  Iniciar Módulo 2
                </button>
              </Link>
            </div>
          ) : (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg opacity-50 cursor-not-allowed">
              <h3 className="text-2xl font-semibold text-gray-400">Módulo 2: Energia Renovável vs. Não Renovável</h3>
              <p className="mt-4 text-gray-400">
                Complete o Módulo 1 para liberar o Módulo 2.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] text-black p-4 text-center">
        <p>&copy; 2024 Sparkuest - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
