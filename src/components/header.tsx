import { MagnifyingGlassIcon } from '@phosphor-icons/react'
import type { HeaderProps } from '../types/header'
import { useState } from 'react';

export const Header = ({title,search,entrySearch}:HeaderProps) => {
  const [seeSearch,setSeeSearch]= useState(false);
  return (
    <header className="h-24 border-b bg-black flex justify-between items-center p-4 ">
      <div className="w-20 h-8">
        <img src="/public/img/spoti_logo.png" alt="logo" className="bg-black" />
      </div>
      <h1>
        {title === "Usuários"? "Lista de Usuários": "Detalhes do Usuário"}
      </h1>
      <button className="w-6 h-6" onClick={()=>setSeeSearch((s)=>!s)}>
        <MagnifyingGlassIcon
          className="text-white -800 mt-3"
          size={24}
          strokeWidth={2}
          
        />
      </button>
      {seeSearch &&(
        <div className="absolute top-full left-0 w-full bg-white px-4 py-3 shadow">
          <input
            type="text"
            placeholder={
              title === 'Usuários'
                ? 'Pesquisar Usuários...'
                : 'Pesquisar Músicas...'
            }
            className="w-full p-2 border rounded-lg text-black"
            value={entrySearch}
            onChange={(e) => search(e.target.value)}
          />
        </div>
      )

      }
    </header>
  )
}


