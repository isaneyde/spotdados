import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import type { HeaderProps } from '../types/header';
import { useState } from 'react';

export const Header = ({ title, search, entrySearch }: HeaderProps) => {
  const [seeSearch, setSeeSearch] = useState(false);

  return (
    <header className="h-24 border-b bg-black flex justify-between items-center px-4 relative">
      {/* Logo e Título */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-8">
          <img src="/img/spoti_logo.png" alt="logo" className="bg-black" />
        </div>
        <h1 className="text-white text-lg font-semibold">
          {title === "Usuários" ? "Lista de Usuários" : "Detalhes do Usuário"}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="w-6 h-6"
          onClick={() => setSeeSearch((s) => !s)}
        >
          <MagnifyingGlassIcon
            className="text-white mt-1"
            size={24}
            strokeWidth={2}
          />
        </button>
      </div>

      {seeSearch && (
        <div className=" right-4 mt-2 w-80 bg-black px-4 py-3 shadow-lg rounded-lg z-50">
          <input
            type="text"
            placeholder={
              title === 'Usuários'
                ? 'Pesquisar Usuários...'
                : 'Pesquisar Músicas...'
            }
            className= " p-2 border rounded-lg text-black bg-white"
            value={entrySearch}
            onChange={(e) => search(e.target.value)}
          />
        </div>
      )}
    </header>
  );
};
