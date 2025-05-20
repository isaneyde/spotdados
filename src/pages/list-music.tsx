import { useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import type { userProps } from '../types/users'
import { users } from '../data/data'

export const ListMusic = () => {
  const [searchQuery, setSearchQuery] = useState('');
const [details, setDetails] = useState<userProps[]>(users);

const handleSearch = (query: string) => {
  setSearchQuery(query);
  const filtered = users.filter((user) =>
    user.mostListenedSongs.some((song) =>
    song.toLowerCase().includes(query.toLowerCase())
  )
)
  setDetails(filtered);
};

return (
  <>
    <Header
      entrySearch={searchQuery}
      search={handleSearch}
      title="Detalhes" 
    />

    <main className="flex-1 overflow-y-auto px-4">
             <h2 className="text-lg font-semibold my-3">Usuários</h2>
             <ul className="space-y-3">
               {details.map((user) => (
                 <li
                   key={user.id}
                   className="border rounded-lg p-3 flex items-start"
                 >
                   <div className="flex-1">
                     <div className="mt-2">
                       <p className="text-sm text-gray-500">
                         Músicas mais ouvidas:
                       </p>
                       <div className="flex flex-wrap gap-1 mt-1">
                         {user.mostListenedSongs.map((song, index) => (
                           <span
                             key={index}
                             className="text-xs bg-orange-500 px-2 py-1 rounded"
                           >
                             {song}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>
                 </li>
               ))}
             </ul>
           </main>
   
         
   <Footer />
  </>
);

}


