import modules from "@/data/modules.json";

const ResultsPage = ({ params }: { params: { id: string } }) => {
  const moduleId = parseInt(params.id);
  const mod = modules[moduleId];

  return (
    <div>
      <h1>Parabéns por completar o módulo!</h1>
      <p>Você concluiu o módulo: {mod.moduleTitle}</p>
    </div>
  );
};

export default ResultsPage;
