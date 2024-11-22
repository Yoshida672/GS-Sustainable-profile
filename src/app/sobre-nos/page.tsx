import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Certifique-se de ter o react-icons instalado

export default function SobreNosPage () {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A]">
      <div className="relative z-10 flex-grow p-6">
        <div className="flex justify-between items-center my-8">
          <h1 className="text-3xl font-extrabold text-black animate__animated animate__fadeIn">
            Sobre Nós
          </h1>
          <div>
            <Link href="/" className="text-black mr-4 hover:underline transition-colors">
              Voltar à Página Inicial
            </Link>
          </div>
        </div>

        <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 p-10">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <Image 
              src="/images/gustavo-moncao.jpg"
              alt="Gustavo Monção"
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover"
            />
            <h2 className="text-2xl font-semibold text-[#21CCBC]">Gustavo Monção</h2>
            <p className="mt-2 text-gray-600 text-sm">
              LinkedIn: 
              <a href="https://www.linkedin.com/in/gustavo-monção-574a38224/" target="_blank" className="text-blue-500 hover:underline flex items-center">
                <FaLinkedin className="mr-2 text-xl" /> Gustavo Monção
              </a>
            </p>
            <p className="text-gray-600 text-sm">
              GitHub: 
              <a href="https://github.com/moncaogustavo" target="_blank" className="text-blue-500 hover:underline flex items-center">
                <FaGithub className="mr-2 text-xl" /> moncaogustavo
              </a>
            </p>
            <p className="text-gray-600 text-sm">RM: <span className="text-blue-500">557515</span></p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <Image 
              src="/images/gustavo-matias.jpg"
              alt="Gustavo Matias"
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover"
            />
            <h2 className="text-2xl font-semibold text-[#21CCBC]">Gustavo Matias</h2>
            <p className="mt-2 text-gray-600 text-sm">
              LinkedIn: 
              <a href="https://www.linkedin.com/in/gustavo-matias-teixeira-2b89a7266/" target="_blank" className="text-blue-500 hover:underline flex items-center">
                <FaLinkedin className="mr-2 text-xl" /> Gustavo Matias Teixeira
              </a>
            </p>
            <p className="text-gray-600 text-sm">
              GitHub: 
              <a href="https://github.com/Gustavo295" target="_blank" className="text-blue-500 hover:underline flex items-center">
                <FaGithub className="mr-2 text-xl" /> Gustavo295
              </a>
            </p>
            <p className="text-gray-600 text-sm">RM: <span className="text-blue-500">555010</span></p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <Image 
              src="/images/eric.jpg"
              alt="Eric Yoshida"
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover"
            />
            <h2 className="text-2xl font-semibold text-[#21CCBC]">Eric Yoshida</h2>
            <p className="mt-2 text-gray-600 text-sm">
              LinkedIn: 
              <a href="https://www.linkedin.com/in/eric-issamu-356325274/" target="_blank" className="text-blue-500 hover:underline flex items-center">
                <FaLinkedin className="mr-2 text-xl" /> Eric Issamu
              </a>
            </p>
            <p className="text-gray-600 text-sm">
              GitHub: 
              <a href="https://github.com/Yoshida672" target="_blank" className="text-blue-500 hover:underline flex items-center">
                <FaGithub className="mr-2 text-xl" /> Yoshida672
              </a>
            </p>
            <p className="text-gray-600 text-sm">RM: <span className="text-blue-500">558763</span></p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] text-black p-4 text-center">
        <p className="text-sm">&copy; 2024 Sparkuest - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};
