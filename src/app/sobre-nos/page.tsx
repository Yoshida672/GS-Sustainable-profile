import React from "react";
import Image from "next/image";
import Link from "next/link";

const SobreNosPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Sobreposição mais forte para melhorar contraste */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Conteúdo principal com gradiente mais suave */}
      <div className="bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] p-6 relative z-10">
        {/* Cabeçalho com links */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-white animate__animated animate__fadeIn">
            Sobre Nós
          </h1>
          <div>
            {/* Link para a página Home */}
            <Link href="/" className="text-white mr-4 hover:underline transition-colors">
              Voltar à Página Inicial
            </Link>
          </div>
        </div>

        {/* Informações dos membros do time */}
        <div className="mt-8 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gustavo Monção */}
          <div className="text-center">
            <Image 
              src="/images/gustavo-moncao.jpg" // Caminho da foto de Gustavo Monção
              alt="Gustavo Monção"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold">Gustavo Monção</h2>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/gustavo-monção-574a38224/" target="_blank" className="text-blue-500">Perfil do LinkedIn</a></p>
            <p>GitHub: <a href="https://github.com/moncaogustavo" target="_blank" className="text-blue-500">Perfil no GitHub</a></p>
          </div>

          {/* Gustavo Matias */}
          <div className="text-center">
            <Image 
              src="/images/gustavo-matias.jpg" // Caminho da foto de Gustavo Matias
              alt="Gustavo Matias"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold">Gustavo Matias</h2>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/gustavo-matias-teixeira-2b89a7266/" target="_blank" className="text-blue-500">Perfil do LinkedIn</a></p>
            <p>GitHub: <a href="https://github.com/Gustavo295" target="_blank" className="text-blue-500">Perfil no GitHub</a></p>
          </div>

          {/* Eric Yoshida */}
          <div className="text-center">
            <Image 
              src="images/eric-yoshida.jpg"
              alt="Eric Yoshida"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold">Eric Yoshida</h2>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/eric-issamu-356325274/" target="_blank" className="text-blue-500">Perfil do LinkedIn</a></p>
            <p>GitHub: <a href="https://github.com/Yoshida672" target="_blank" className="text-blue-500">Perfil no GitHub</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosPage;
