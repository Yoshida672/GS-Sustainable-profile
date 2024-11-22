'use client';

import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function AssinePage() {
  const [isClient, setIsClient] = useState(false); // Verificação do cliente
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null); // Armazena o plano selecionado
  const [schoolName, setSchoolName] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const plans = [
    {
      id: 'basic',
      name: 'Plano Básico',
      price: 'R$ 99,99/mês',
      students: 'Até 100 alunos',
      teachers: 'Até 5 professores',
      features: [
        'Acesso básico ao sistema de gestão',
        'Relatórios limitados',
        'Suporte por e-mail',
      ],
    },
    {
      id: 'intermediate',
      name: 'Plano Intermediário',
      price: 'R$ 299,99/mês',
      students: 'Até 500 alunos',
      teachers: 'Até 20 professores',
      features: [
        'Gestão completa de alunos e professores',
        'Relatórios detalhados',
        'Suporte por chat e e-mail',
        'Integração com plataformas de ensino',
      ],
    },
    {
      id: 'advanced',
      name: 'Plano Avançado',
      price: 'R$ 499,99/mês',
      students: 'Até 1000 alunos',
      teachers: 'Até 50 professores',
      features: [
        'Gestão total de alunos, professores e turmas',
        'Relatórios avançados e personalizáveis',
        'Suporte 24/7 via chat e telefone',
        'Consultoria personalizada para gestão escolar',
      ],
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  if (!isClient) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#E8F9F1]">
     
     <header className="bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl text-black font-bold">Sparkuest</h1>
          <div>
            <a href="/" className="text-white hover:underline">Voltar à Página Inicial</a>
          </div>
        </div>
      </header>

      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-3xl font-semibold text-[#21CCBC] mb-6 text-center">Escolha o plano da sua escola</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 border rounded-lg shadow-md cursor-pointer transform transition-all duration-300 ${
                  selectedPlan === plan.id ? 'border-[#21CCBC]' : 'border-gray-300'
                }`}
                onClick={() => handleSelectPlan(plan.id)}
              >
                <h3 className="text-xl font-semibold text-[#21CCBC]">{plan.name}</h3>
                <p className="text-lg text-gray-700">{plan.price}</p>
                <p className="mt-4 text-gray-600">Alunos: {plan.students}</p>
                <p className="text-gray-600">Professores: {plan.teachers}</p>
                <ul className="mt-4 text-gray-600">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2 flex items-center">
                      <span className="mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <form className="mt-6">
            <div className="mb-4">
              <label htmlFor="schoolName" className="block text-gray-600">Nome da Escola</label>
              <input
                type="text"
                id="schoolName"
                className="w-full p-3 mt-2 border rounded-lg"
                placeholder="Digite o nome da sua escola"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contactEmail" className="block text-gray-600">Email de Contato</label>
              <input
                type="email"
                id="contactEmail"
                className="w-full p-3 mt-2 border rounded-lg"
                placeholder="Digite o e-mail de contato da escola"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
              />
            </div>

            <div className="mt-4 text-center">
              <button
                type="submit"
                className="bg-[#21CCBC] hover:bg-[#17A094] text-white px-6 py-3 rounded-lg transition-all"
              >
                Assinar Agora
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
