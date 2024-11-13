import Link from "next/link";
import modules from "@/data/modules.json";
  const HomePage = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Bem-vindo ao Jogo Educativo!</h1>
        <p className="mt-4 text-lg">Escolha um módulo para começar:</p>
        <div className="mt-6 grid grid-cols-1 gap-4">
        {modules.map((module, index) => (
          <Link
           key={index}
           href={`/game/module/${index}`}
           className="block p-4 bg-secondary text-white rounded-lg shadow-md hover:scale-105 transition-transform"
          >
           {module.moduleTitle}
          </Link>
       ))}
      </div>
    </div>
  );
};
export default HomePage;