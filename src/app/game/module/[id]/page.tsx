"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import modules from "@/data/modules.json";
import { QuizCard } from "@/components/QuizCard";

const ModulePage = ({ params }: { params: { id: string } }) => {
    const moduleId = parseInt(params.id);
    const module = modules[moduleId];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const router = useRouter();

    const handleNext = () => {
        if (currentQuestion +1 < module.questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            router.push(`/game/module/${moduleId}/results`);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-x1 font bold text-primary mb-4">{module.moduleTitle}</h1>
            <QuizCard question={module.questions[currentQuestion]} onNext={handleNext} />
        </div>
    );
};

export default ModulePage;