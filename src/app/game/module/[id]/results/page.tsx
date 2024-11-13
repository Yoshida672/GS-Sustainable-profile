import Link from "next/link";
import modules from "@/data/modules.json";

const ResultsPage = ({ params }: {params: { id: string } }) => {
    const moduleId = parseInt = parseInt(params.id);
    const module = modules[moduleId];

    return (
        <div className="p-6">
            <h1 className="text-2x1 font-bold text-primary">Parabéns!</h1>
            <p className="mt-4 text-lg">Você Completou o módulo: {module.moduleTitle}</p>
            <div className="mt-6">
                <link href="/" className="block w-full py-2 px-4 bg-secondary text-white rounded-lg hover:scale-105 transition-transform">
                    Voltar à Pagina Inicial
                </link>
            </div>
        </div>
    );
};

export default ResultsPage;