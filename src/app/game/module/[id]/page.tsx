import modules from "@/data/modules.json";

const ModulePage = ({ params }: { params: { id: string } }) => {
  const moduleId = parseInt(params.id); // Corrigir uso de `parseInt`
  const mod = modules[moduleId]; // Renomear `module` para `mod`

  return (
    <div>
      <h1>{mod.moduleTitle}</h1>
      <p>{mod.description}</p>
    </div>
  );
};

export default ModulePage;
