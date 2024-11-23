import Link from "next/link";
import Image from "next/image";
import { IoSettingsSharp, IoHomeSharp } from "react-icons/io5";

export default function Header() {
  const placeholderImageUrl =
    "https://avatars.dicebear.com/api/initials/AB.svg";

  return (
    <header className="bg-gradient-to-r from-[#21CCBC] via-[#85F1B2] to-[#B6DD6A] text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/parkuest-logo.png" // Caminho corrigido
            alt="Logo Sparkuest"
            height={150}
            width={150}
            className="cursor-pointer"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          {/* Home */}
          <Link href="/modulos" aria-label="Módulos">
            <IoHomeSharp
              size={32}
              className="text-black hover:scale-110 transition"
            />
          </Link>

          {/* Sobre Nós */}
          <Link href="/sobre-nos">
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              Sobre Nós
            </button>
          </Link>

          {/* Configurações */}
          <Link href="/configuracoes" aria-label="Configurações">
            <IoSettingsSharp
              size={32}
              className="text-black hover:scale-110 transition"
            />
          </Link>

          {/* Perfil */}
          <Link href="/perfil" aria-label="Perfil">
            <Image
              src={placeholderImageUrl}
              alt="Imagem de Perfil"
              width={50}
              height={50}
              className="rounded-full object-cover border-2 border-black"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
