import Link from "next/link";
import Image from "next/image";
import { IoSettingsSharp } from "react-icons/io5";

export default function Header() {
  const profileImageUrl = "/caminho/para/imagem-perfil.jpg";

  return (
    <header className="bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl text-black font-bold">Sparkuest</h1>
        <div className="flex items-center">
          <Link href="/sobre-nos" className="mr-4 hover:underline text-black">
            Sobre Nós
          </Link>

          <Link href="/configuracoes" className="ml-4 hover:underline text-black">
            <IoSettingsSharp className="m-5 w-8 h-8"/>
          </Link>
          
          <Link href="/perfil" className="flex items-center hover:underline text-black">
            <Image
              src={profileImageUrl}  
              alt="Imagem de Perfil"
              width={40}  
              height={40} 
              className="rounded-full object-cover" 
            />
          </Link>

          
        </div>
      </div>
    </header>
  );
}
