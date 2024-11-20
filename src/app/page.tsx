'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

const HomePage = () => {
  const [isModule1Completed, setIsModule1Completed] = useState(false);
  const [isModule2Completed, setIsModule2Completed] = useState(false);
  const [isModule3Completed, setIsModule3Completed] = useState(false);
  const [isModule4Completed, setIsModule4Completed] = useState(false);
  const [isModule5Completed, setIsModule5Completed] = useState(false);
  const [isModule6Completed, setIsModule6Completed] = useState(false);
  const [isModule7Completed, setIsModule7Completed] = useState(false);
  const [isModule8Completed, setIsModule8Completed] = useState(false);
  const [isModule9Completed, setIsModule9Completed] = useState(false);
  const [isModule10Completed, setIsModule10Completed] = useState(false);

  useEffect(() => {
    // Verifica se os módulos foram completados no localStorage
    for (let i = 1; i <= 10; i++) {
      const moduleStatus = localStorage.getItem(`module${i}Completed`);
      if (moduleStatus === "true") {
        eval(`setIsModule${i}Completed(true)`);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#E8F9F1]">
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
            <p className="mt-4 text-black">Comece sua jornada para entender a energia sustentável e seus impactos.</p>
            <Link href="/game/module/0">
              <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">Iniciar Módulo 1</button>
            </Link>
          </div>

          {/* Módulo 2 - Aparece somente se o Módulo 1 for completado */}
          {isModule1Completed ? (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black">Módulo 2: Energia Renovável vs. Não Renovável</h3>
              <p className="mt-4 text-black">Entenda as diferenças e os impactos ambientais das fontes de energia.</p>
              <Link href="/game/module/1">
                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">Iniciar Módulo 2</button>
              </Link>
            </div>
          ) : (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg opacity-50 cursor-not-allowed">
              <h3 className="text-2xl font-semibold text-gray-400">Módulo 2: Energia Renovável vs. Não Renovável</h3>
              <p className="mt-4 text-gray-400">Complete o Módulo 1 para liberar o Módulo 2.</p>
            </div>
          )}

          {/* Módulo 3 - Aparece somente se o Módulo 2 for completado */}
          {isModule2Completed ? (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black">Módulo 3: Impactos Ambientais da Geração de Energia</h3>
              <p className="mt-4 text-black">Explore os impactos ambientais das diferentes fontes de energia.</p>
              <Link href="/game/module/2">
                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">Iniciar Módulo 3</button>
              </Link>
            </div>
          ) : (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg opacity-50 cursor-not-allowed">
              <h3 className="text-2xl font-semibold text-gray-400">Módulo 3: Impactos Ambientais da Geração de Energia</h3>
              <p className="mt-4 text-gray-400">Complete o Módulo 2 para liberar o Módulo 3.</p>
            </div>
          )}

          {/* Módulo 4 - Aparece somente se o Módulo 3 for completado */}
          {isModule3Completed ? (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black">Módulo 4: Fontes de Energia Limpa</h3>
              <p className="mt-4 text-black">Descubra como as fontes de energia limpa contribuem para o futuro sustentável.</p>
              <Link href="/game/module/3">
                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">Iniciar Módulo 4</button>
              </Link>
            </div>
          ) : (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg opacity-50 cursor-not-allowed">
              <h3 className="text-2xl font-semibold text-gray-400">Módulo 4: Fontes de Energia Limpa</h3>
              <p className="mt-4 text-gray-400">Complete o Módulo 3 para liberar o Módulo 4.</p>
            </div>
          )}

          {/* Módulo 5 - Aparece somente se o Módulo 4 for completado */}
          {isModule4Completed ? (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black">Módulo 5: Eficiência Energética</h3>
              <p className="mt-4 text-black">Aprenda sobre a importância da eficiência energética na redução do consumo.</p>
              <Link href="/game/module/4">
                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">Iniciar Módulo 5</button>
              </Link>
            </div>
          ) : (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg opacity-50 cursor-not-allowed">
              <h3 className="text-2xl font-semibold text-gray-400">Módulo 5: Eficiência Energética</h3>
              <p className="mt-4 text-gray-400">Complete o Módulo 4 para liberar o Módulo 5.</p>
            </div>
          )}

          {/* Módulo 6 - Aparece somente se o Módulo 5 for completado */}
          {isModule5Completed ? (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black">Módulo 6: Energias Renováveis e suas Tecnologias</h3>
              <p className="mt-4 text-black">Estude as principais tecnologias por trás das energias renováveis.</p>
              <Link href="/game/module/5">
                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">Iniciar Módulo 6</button>
              </Link>
            </div>
          ) : (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg opacity-50 cursor-not-allowed">
              <h3 className="text-2xl font-semibold text-gray-400">Módulo 6: Energias Renováveis e suas Tecnologias</h3>
              <p className="mt-4 text-gray-400">Complete o Módulo 5 para liberar o Módulo 6.</p>
            </div>
          )}

          {/* Módulo 7 - Aparece somente se o Módulo 6 for completado */}
          {isModule6Completed ? (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black">Módulo 7: Impacto Econômico das Energias Renováveis</h3>
              <p className="mt-4 text-black">Entenda como as energias renováveis afetam a economia mundial e local.</p>
              <Link href="/game/module/6">
                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">Iniciar Módulo 7</button>
              </Link>
            </div>
          ) : (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg opacity-50 cursor-not-allowed">
              <h3 className="text-2xl font-semibold text-gray-400">Módulo 7: Impacto Econômico das Energias Renováveis</h3>
              <p className="mt-4 text-gray-400">Complete o Módulo 6 para liberar o Módulo 7.</p>
            </div>
          )}

          {/* Módulo 8 - Aparece somente se o Módulo 7 for completado */}
          {isModule7Completed ? (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black">Módulo 8: Energias Renováveis e a Mudança Climática</h3>
              <p className="mt-4 text-black">Explore como as energias renováveis ajudam a combater as mudanças climáticas.</p>
              <Link href="/game/module/7">
                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">Iniciar Módulo 8</button>
              </Link>
            </div>
          ) : (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg opacity-50 cursor-not-allowed">
              <h3 className="text-2xl font-semibold text-gray-400">Módulo 8: Energias Renováveis e a Mudança Climática</h3>
              <p className="mt-4 text-gray-400">Complete o Módulo 7 para liberar o Módulo 8.</p>
            </div>
          )}

          {/* Módulo 9 - Aparece somente se o Módulo 8 for completado */}
          {isModule8Completed ? (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black">Módulo 9: Políticas Públicas para Energias Renováveis</h3>
              <p className="mt-4 text-black">Estude as políticas públicas que incentivam o uso de energias renováveis.</p>
              <Link href="/game/module/8">
                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">Iniciar Módulo 9</button>
              </Link>
            </div>
          ) : (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg opacity-50 cursor-not-allowed">
              <h3 className="text-2xl font-semibold text-gray-400">Módulo 9: Políticas Públicas para Energias Renováveis</h3>
              <p className="mt-4 text-gray-400">Complete o Módulo 8 para liberar o Módulo 9.</p>
            </div>
          )}

          {/* Módulo 10 - Aparece somente se o Módulo 9 for completado */}
          {isModule9Completed ? (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black">Módulo 10: O Futuro da Energia Sustentável</h3>
              <p className="mt-4 text-black">Descubra como a tecnologia pode moldar o futuro da energia sustentável.</p>
              <Link href="/game/module/9">
                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">Iniciar Módulo 10</button>
              </Link>
            </div>
          ) : (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg opacity-50 cursor-not-allowed">
              <h3 className="text-2xl font-semibold text-gray-400">Módulo 10: O Futuro da Energia Sustentável</h3>
              <p className="mt-4 text-gray-400">Complete o Módulo 9 para liberar o Módulo 10.</p>
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