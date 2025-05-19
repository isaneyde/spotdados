import { MagnifyingGlassIcon, UserIcon } from '@phosphor-icons/react'

export const Header = () => {
  return (
    
      <header className="flex flex-col h-screen bg-white">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="w-6 h-6">
            <UserIcon className="text-black -800" size={24} strokeWidth={2} />
          </div>
          <div className="text-center font-semibold text-black -80">
            Usuários
          </div>
          <div className="w-6 h-6">
            <MagnifyingGlassIcon
              className="text-black -800"
              size={24}
              strokeWidth={2}
            />
          </div>
        </div>
      </header>
  
  )
}


