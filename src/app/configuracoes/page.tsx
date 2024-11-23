"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function Configuracoes() {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [nickname, setNickname] = useState("Jogador123");
  const router = useRouter();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!profileImage) {
      alert("Por favor, selecione uma imagem!");
      return;
    }

    console.log("Imagem de perfil atualizada:", profileImage);

    router.push("/perfil");
  };

  const generateRandomColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 70%, 70%)`;
    return color;
  };

  const getInitials = (name: string) => {
    const words = name.split(" ");
    return words.length > 1
      ? words[0].charAt(0) + words[1].charAt(0)
      : words[0].charAt(0);
  };

  return (
    <div className="bg-gray-50 min-h-screen ">
      <Header />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-center mb-6">
          Configurações de Perfil
        </h1>

        <div className="flex flex-col items-center mb-6">
          <div className="mb-4">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Imagem de Perfil"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{ backgroundColor: generateRandomColor(nickname) }}
              >
                <span className="text-white text-xl">
                  {getInitials(nickname)}
                </span>
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4"
          />

          <div className="mb-4">
            <label className="block text-lg font-semibold">Nickname:</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-64 p-2 border border-gray-300 rounded-md mt-2"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Atualizar Perfil
          </button>
        </div>
      </div>
    </div>
  );
}
