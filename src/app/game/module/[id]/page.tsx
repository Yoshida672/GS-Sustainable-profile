'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import modules from "@/data/modules.json";

export default function ModulePage(){
  const router = useRouter();
  const pathname = usePathname();
  const moduleIndex = parseInt(pathname.split("/")[3]);
  const module = modules[moduleIndex];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [xp, setXP] = useState(0);
  const [lives, setLives] = useState(5);
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);

  useEffect(() => {
    const storedXP = parseInt(localStorage.getItem("xp") || "0", 10);
    const storedLives = parseInt(localStorage.getItem("lives") || "5", 10);

    setXP(storedXP);
    setLives(storedLives);
  }, []);

  useEffect(() => {
    localStorage.setItem("xp", xp.toString());
    localStorage.setItem("lives", lives.toString());

    if (lives <= 0) {
      alert("Você perdeu todas as vidas! O módulo será reiniciado.");
      router.push("/");
    }
  }, [xp, lives, router]);

  const currentQuestion = module?.questions[currentQuestionIndex];

  const handleConfirmAnswer = () => {
    if (!selectedAnswer) {
      alert("Selecione uma resposta antes de confirmar.");
      return;
    }

    setIsAnswered(true);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setXP(xp + 10);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setLives(lives - 1);
    }

    setAnsweredQuestions(answeredQuestions + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < module.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false);
      setSelectedAnswer(null);
    } else {
      localStorage.setItem(`module${moduleIndex + 1}Completed`, "true");
      router.push("/");
    }
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A]">
      {module && currentQuestion ? (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white mb-6">{module.moduleTitle}</h1>
          <p className="text-lg text-white">XP: {xp}</p>
          <p className="text-lg text-white">Vidas: {lives} ❤️</p>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-black">{currentQuestion.question}</h2>
            <div className="mt-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 my-2 rounded-lg ${
                    isAnswered
                      ? option === currentQuestion.correctAnswer
                        ? "bg-green-500 text-white animate-pulse"
                        : option === selectedAnswer
                        ? "bg-red-500 text-white"
                        : "bg-gray-100"
                      : selectedAnswer === option
                      ? "bg-blue-200"
                      : "bg-gray-100"
                  }`}
                  onClick={() => !isAnswered && setSelectedAnswer(option)}
                  disabled={isAnswered}
                >
                  {option}
                </button>
              ))}
            </div>

            {!isAnswered ? (
              <button
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleConfirmAnswer}
                disabled={!selectedAnswer}
              >
                Confirmar Resposta
              </button>
            ) : (
              <div className="mt-4 text-center">
                <p>
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? "Resposta correta! +10 XP"
                    : "Resposta incorreta! Você perdeu uma vida."}
                </p>
                <p>A resposta correta é: {currentQuestion.correctAnswer}</p>
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

            <div className="mt-6 flex justify-between">
              <button
                className="px-6 py-2 bg-gray-500 text-white rounded-lg"
                onClick={handleGoHome}
              >
                Voltar para a Página Principal
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-white text-center">Carregando perguntas...</p>
      )}
    </div>
  );
};

