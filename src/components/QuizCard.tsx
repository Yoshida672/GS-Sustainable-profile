import { motion } from "framer-motion";
import React, { useState } from "react";

// Tipagem das props
interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface QuizCardProps {
  question: Question;
  onNext: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, onNext }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const isCorrect = selectedOption === question.answer;

  const handleAnswer = () => {
    if (selectedOption) setIsAnswered(true);
  };

  const animationProps = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div {...animationProps} className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{question.question}</h2>
      <div className="mt-4">
        {question.options.map((option: string, index: number) => (
          <button
            key={index}
            className={`block w-full py-2 px-4 mb-2 rounded-lg ${
              isAnswered
                ? option === question.answer
                  ? "bg-green-500 text-white"
                  : option === selectedOption
                  ? "bg-red-500 text-white"
                  : "bg-gray-200"
                : "bg-blue-200 hover:bg-blue-300"
            }`}
            onClick={() => !isAnswered && setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {isAnswered ? (
          <button
            onClick={onNext}
            className="w-full py-2 px-4 bg-secondary text-white rounded-lg"
          >
            Próxima
          </button>
        ) : (
          <button
            onClick={handleAnswer}
            className="w-full py-2 px-4 bg-primary text-white rounded-lg"
          >
            Confirmar
          </button>
        )}
      </div>
    </motion.div>
  );
};
