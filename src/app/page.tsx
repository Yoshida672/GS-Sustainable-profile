import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] flex flex-col">
      <section
        className="relative flex flex-col items-center justify-center min-h-[80vh] text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/school-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Transforme a Educação da Sua Escola com o Sparkuest
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            Sparkuest é uma plataforma inovadora que potencializa o aprendizado
            dos alunos através de gamificação e conquistas. Ajude sua escola a
            alcançar novos patamares de sucesso e engajamento.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/assine" passHref>
              <button className="px-6 py-3 bg-[#21CCBC] hover:bg-[#17A094] text-white font-semibold text-lg rounded-lg transition-all">
                Assine Agora e Comece a Transformação
              </button>
            </Link>
            <Link href="/cadastro" passHref>
              <button className="px-6 py-3 bg-white hover:bg-gray-100 text-[#21CCBC] font-semibold text-lg rounded-lg transition-all">
                Não possui uma conta? Faça Cadastro
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#21CCBC] mb-8">
          Por que Escolher o Sparkuest?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#21CCBC] mb-4">
              Engajamento Gamificado
            </h3>
            <p className="text-gray-600">
              Transforme o aprendizado em uma experiência divertida e motivadora
              com o uso de conquistas e recompensas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#21CCBC] mb-4">
              Relatórios de Performance
            </h3>
            <p className="text-gray-600">
              Acompanhe o progresso dos alunos com relatórios detalhados e
              acompanhe seu crescimento ao longo do tempo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#21CCBC] mb-4">
              Fácil Implementação
            </h3>
            <p className="text-gray-600">
              Nossa plataforma é fácil de integrar ao seu currículo escolar e
              pode ser personalizada conforme as necessidades da sua escola.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#21CCBC] mb-8">
          O que as Escolas Estão Dizendo
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mb-6 md:mb-0">
            <p className="text-gray-600 italic">
              A Sparkuest ajudou a aumentar o engajamento dos alunos, tornando
              as aulas muito mais interativas!
            </p>
            <p className="mt-4 font-semibold text-[#21CCBC]">Escola XYZ</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <p className="text-gray-600 italic">
              Com os relatórios de desempenho, conseguimos identificar melhor as
              necessidades dos nossos alunos.
            </p>
            <p className="mt-4 font-semibold text-[#21CCBC]">Escola ABC</p>
          </div>
        </div>
      </section>

      <section className="bg-[#21CCBC] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para Transformar a Educação na Sua Escola?
        </h2>
        <p className="text-lg mb-8">
          Não perca a oportunidade de revolucionar o ensino com Sparkuest.
          Assine agora e comece a mudança!
        </p>
        <Link href="/assine" passHref>
          <button className="px-8 py-4 bg-white text-[#21CCBC] hover:bg-[#85F1B2] text-lg font-semibold rounded-lg transition-all">
            Assine Agora
          </button>
        </Link>
      </section>

      <footer className="bg-[#21CCBC] text-center py-4 text-white">
        <p>&copy; 2024 Sparkuest. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
