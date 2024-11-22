'use client';

import Header from '@/components/Header';
import Profile from '@/components/Profile'; // Importa o componente Profile
import { ProfileData } from '@/types'; // Importa o tipo ProfileData
import { useEffect, useState } from 'react';

export default function Perfil() {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Agora fazendo a requisição para a nova API
        const response = await fetch('/api/profileData');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Erro ao carregar os dados do perfil:', error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profile) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen ">
    <Header/>
      <Profile profile={profile} />
    </div>
  );
}
