"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";
const modules = [
  {
    id: 1,
    title: "Módulo 1: Introdução à Energia Sustentável",
    description:
      "Comece sua jornada para entender a energia sustentável e seus impactos.",
    link: "/game/module/0",
  },
  {
    id: 2,
    title: "Módulo 2: Energia Renovável vs. Não Renovável",
    description:
      "Entenda as diferenças e os impactos ambientais das fontes de energia.",
    link: "/game/module/1",
  },
  {
    id: 3,
    title: "Módulo 3: Impactos Ambientais da Geração de Energia",
    description:
      "Explore os impactos ambientais das diferentes fontes de energia.",
    link: "/game/module/2",
  },
  {
    id: 4,
    title: "Módulo 4: Fontes de Energia Limpa",
    description:
      "Descubra como as fontes de energia limpa contribuem para o futuro sustentável.",
    link: "/game/module/3",
  },
  {
    id: 5,
    title: "Módulo 5: Eficiência Energética",
    description:
      "Aprenda sobre a importância da eficiência energética na redução do consumo.",
    link: "/game/module/4",
  },
  {
    id: 6,
    title: "Módulo 6: Energias Renováveis e suas Tecnologias",
    description:
      "Estude as principais tecnologias por trás das energias renováveis.",
    link: "/game/module/5",
  },
  {
    id: 7,
    title: "Módulo 7: Impacto Econômico das Energias Renováveis",
    description:
      "Entenda como as energias renováveis afetam a economia mundial e local.",
    link: "/game/module/6",
  },
  {
    id: 8,
    title: "Módulo 8: Energias Renováveis e a Mudança Climática",
    description:
      "Explore como as energias renováveis ajudam a combater as mudanças climáticas.",
    link: "/game/module/7",
  },
  {
    id: 9,
    title: "Módulo 9: Políticas Públicas para Energias Renováveis",
    description:
      "Estude as políticas públicas que incentivam o uso de energias renováveis.",
    link: "/game/module/8",
  },
  {
    id: 10,
    title: "Módulo 10: O Futuro da Energia Sustentável",
    description:
      "Projete um futuro sustentável com base nas energias renováveis.",
    link: "/game/module/9",
  },
];
export default function Modulos() {
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  useEffect(() => {
    const completed = [];
    for (let i = 1; i <= modules.length; i++) {
      const moduleStatus = localStorage.getItem(`module${i}Completed`);
      if (moduleStatus === "true") {
        completed.push(i);
      }
    }
    setCompletedModules(completed);
  }, []);

  return (
    <div className="min-h-screen bg-[#E8F9F1]">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h2 className="text-3xl font-semibold text-black mb-8">
          Escolha um Módulo para Começar
        </h2>

        <div className="flex flex-col items-center w-full max-w-md space-y-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`w-full p-6 bg-white rounded-lg shadow-lg ${
                completedModules.includes(module.id - 1) || module.id === 1
                  ? ""
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              <h3
                className={`text-2xl font-semibold ${
                  completedModules.includes(module.id - 1) || module.id === 1
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                {module.title}
              </h3>
              <p
                className={`mt-4 ${
                  completedModules.includes(module.id - 1) || module.id === 1
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                {module.description}
              </p>
              {completedModules.includes(module.id - 1) || module.id === 1 ? (
                <Link href={module.link}>
                  <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">
                    Iniciar {module.title}
                  </button>
                </Link>
              ) : (
                <p className="mt-4 text-gray-400">
                  Complete o módulo anterior para desbloquear.
                </p>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
