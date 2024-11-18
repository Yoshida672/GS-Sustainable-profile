import Link from "next/link";
import modules from "@/data/modules.json";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] p-6 relative z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-white animate__animated animate__fadeIn">
            Sparkuest
          </h1>
          <div>
            <Link href="/sobre-nos" className="text-white mr-4 hover:underline transition-colors">
              Sobre Nós
            </Link>
            <Link href="/cadastro" className="text-white hover:underline transition-colors">
              Cadastro
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
            Bem-vindo ao Sparkuest!
          </h2>
          <p className="text-lg text-white mb-8 animate__animated animate__fadeIn">
            Escolha um módulo para começar a jogar e aprender de forma divertida!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {modules.map((module, index) => (
            <Link
              key={index}
              href={`/game/module/${index}`}
              className="block p-6 bg-white text-black rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold">{module.moduleTitle}</h3>
              <p className="text-sm mt-2">{module.description || "Descrição não disponível"}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
