import { useState } from 'react'
import type { userProps } from '../types/users'
import { users } from '../data/data'
import { User, House, MagnifyingGlass } from '@phosphor-icons/react'

export const UsersList = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [displayedUsers, setDisplayedUsers] = useState<userProps[]>(users)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    )
    setDisplayedUsers(filtered)
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="w-6 h-6">
          <User className="text-black -800" size={24} strokeWidth={2} />
        </div>
        <div className="text-center font-semibold text-black -80">Usuários</div>
        <div className="w-6 h-6">
          <MagnifyingGlass
            className="text-black -800"
            size={24}
            strokeWidth={2}
          />
        </div>
      </div>

      <div className="px-4 py-3">
        <input
          type="text"
          placeholder="Pesquisar usuários..."
          className="w-full p-2 border rounded-lg"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        <h2 className="text-lg font-semibold my-3">Usuários</h2>
        <ol className="space-y-3">
          {displayedUsers.map((user) => (
            <li
              key={user.id}
              className="border rounded-lg p-3 flex items-start"
            >
              <div className="flex-1">
                <h3 className="font-medium text-black -800">{user.name}</h3>
<<<<<<< HEAD
                <div className="mt-2">
                  <p className="text-sm text-black -500">Músicas mais ouvidas:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {user.mostListenedSongs.map((song, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                      >
                        {song}
                      </span>
                    ))}
                  </div>
                </div>
=======
>>>>>>> 4c9fc9e21e0a723d8ea105b4969ed92e403b6374
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="h-14 border-t flex items-center justify-center">
        <House size={32} className="h-6 w-6 text-gray-500" />
      </div>
    </div>
  )
}
