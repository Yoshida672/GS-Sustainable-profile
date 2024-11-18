'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Para navegação
import { usePathname } from 'next/navigation'; // Para pegar o caminho da URL
import modules from "@/data/modules.json"; // Importando o JSON com os módulos

const ModulePage = () => {
  const router = useRouter();
  const pathname = usePathname(); // Captura a URL atual
  const moduleIndex = parseInt(pathname.split("/")[3]); // Extrai o ID do módulo da URL
  const module = modules[moduleIndex]; // Pega os dados do módulo pelo índice

  useEffect(() => {
    // Verifica se o Módulo 1 foi completado
    if (moduleIndex === 1 && localStorage.getItem("module1Completed") !== "true") {
      // Se for o Módulo 2 e o Módulo 1 não foi completado, redireciona para o Módulo 1
      router.push("/game/module/0"); // Redireciona para o Módulo 1
    }
  }, [moduleIndex, router]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = module?.questions[currentQuestionIndex]; // Pergunta atual do módulo

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === currentQuestion.correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < module.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false);
      setSelectedAnswer(null);
    } else {
      // Marca o módulo como concluído
      localStorage.setItem(`module${moduleIndex + 1}Completed`, "true");
      router.push("/"); // Redireciona para a página principal
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A]">
      {module && currentQuestion ? (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white mb-6">{module.moduleTitle}</h1>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-black">{currentQuestion.question}</h2>
            <div className="mt-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 my-2 rounded-lg ${
                    selectedAnswer === option
                      ? option === currentQuestion.correctAnswer
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleAnswer(option)}
                  disabled={isAnswered}
                >
                  {option}
                </button>
              ))}
            </div>

            {isAnswered && (
              <div className="mt-4 text-center">
                <p>
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? "Resposta correta!"
                    : "Resposta incorreta!"}
                </p>
                <p>
                  A resposta correta é: {currentQuestion.correctAnswer}
                </p>
                <button
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
                  onClick={handleNextQuestion}
                >
                  {currentQuestionIndex < module.questions.length - 1
                    ? "Próxima Pergunta"
                    : "Concluir Módulo"}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="text-white text-center">Carregando perguntas...</p>
      )}
    </div>
  );
};

export default ModulePage;
