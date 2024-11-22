'use client';

import { ProfileProps } from "@/types";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Perfil({ profile }: ProfileProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filtra apenas as conquistas desbloqueadas
  const unlockedAchievements = profile.achievements.filter(achievement => achievement.isUnlocked);

  const totalAchievements = unlockedAchievements.length;

  // Número de conquistas a serem exibidas por vez
  const achievementsPerPage = 3;

  // Função para mover o carrossel para a direita
  const nextAchievement = () => {
    if (currentIndex < Math.floor(totalAchievements / achievementsPerPage)) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Função para mover o carrossel para a esquerda
  const prevAchievement = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Agrupa as conquistas em blocos de 3
  const groupedAchievements = Array.from({ length: Math.ceil(totalAchievements / achievementsPerPage) }, (_, i) =>
    unlockedAchievements.slice(i * achievementsPerPage, (i + 1) * achievementsPerPage)
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center space-x-4">
        {/* Avatar Placeholder */}
        <div className="w-20 h-20 bg-gray-300 rounded-full"></div>

        <div>
          <h1 className="text-2xl font-semibold">{profile.nickname}</h1>
          <p className="text-sm text-gray-500">Level: {profile.level}</p>
          <p className="text-sm text-gray-500">Pontos: {profile.points}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Conquistas</h2>

        {/* Carrossel de Conquistas */}
        <div className="relative mt-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={prevAchievement} disabled={currentIndex === 0} className="bg-gray-300 p-2 rounded-full">
              <BsArrowLeft />
            </button>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Exibe as conquistas do bloco atual */}
                {groupedAchievements[currentIndex]?.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 border rounded-lg ${achievement.isUnlocked ? 'bg-green-100' : 'bg-gray-100'}`}
                  >
                    <h3 className="font-medium text-lg">{achievement.name}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    {achievement.isUnlocked ? (
                      <span className="text-sm text-green-600 font-semibold">Desbloqueado</span>
                    ) : (
                      <span className="text-sm text-gray-400">Bloqueado</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <button onClick={nextAchievement} disabled={currentIndex === groupedAchievements.length - 1} className="bg-gray-300 p-2 rounded-full">
              <BsArrowRight />
            </button>
          </div>

          {/* Bolinhas de Navegação */}
          <div className="flex justify-center space-x-2 mt-4">
            {groupedAchievements.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-green-600' : 'bg-gray-300'}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
