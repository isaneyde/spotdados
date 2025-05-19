import { MagnifyingGlassIcon } from '@phosphor-icons/react'

export const Header = () => {
  return (
    <header className="h-24 border-b bg-black flex justify-between items-center p-4 ">
      <div className="w-20 h-8">
        <img src="/public/img/spoti_logo.png" alt="logo" className="bg-black" />
      </div>
      <div className="text-center font-semibold text-white -80 text-lg">
        Usuários
      </div>
      <div className="w-6 h-6">
        <MagnifyingGlassIcon
          className="text-white -800 mt-3"
          size={24}
          strokeWidth={2}
          
        />
      </div>
    </header>
  )
}


