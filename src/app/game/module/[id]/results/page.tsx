"use client";
import modules from "@/data/modules.json";

export default function ResultsPage({ params }: { params: { id: string } }) {
  const moduleId = parseInt(params.id, 10); // Corrigir uso de parseInt com base 10

  // Verificar se moduleId é um número válido e se o módulo existe
  const mod = modules[moduleId];
  if (!mod) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A]">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Módulo não encontrado
          </h1>
          <p className="text-lg text-gray-600">
            Desculpe, não conseguimos encontrar o módulo solicitado.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A]">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-6">
          Parabéns por completar o módulo!
        </h1>
        <p className="text-lg text-white mb-4">
          Você concluiu o módulo:{" "}
          <span className="font-semibold">{mod.moduleTitle}</span>
        </p>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <p className="text-lg text-gray-700">
            Excelente trabalho! Continue aprendendo e alcançando novos desafios.
          </p>

          <div className="mt-6 text-center">
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600 transition"
              onClick={() => (window.location.href = "/modulos")}
            >
              Voltar para a Página Principal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
