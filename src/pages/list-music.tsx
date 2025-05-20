import { useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import type { userProps } from '../types/users'


export const ListMusic = ({user}:{user:userProps}) => {
  const [searchQuery, setSearchQuery] = useState('');
const [details, setDetails] = useState<string[]>(user.mostListenedSongs);

const handleSearch = (query: string) => {
  setSearchQuery(query);
  const filtered = user.mostListenedSongs.filter((list) =>
    list.toLowerCase().includes(query.toLowerCase())
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
               
                 <li className="border rounded-lg p-3 flex items-start"
                 >
                   <div className="flex-1">
                     <div className="mt-2">
                       <p className="text-sm text-gray-500">
                         Músicas mais ouvidas:
                       </p>
                       <div className="flex flex-wrap gap-1 mt-1">
                         {details.length > 0 ? (
            details.map((music, i) => (
              <span
                key={i}
                className="bg-orange-500 text-white px-3 py-1 rounded text-sm"
              >
                {music}
              </span>
            ))
          ) : (
            <p className="text-gray-500">Nenhuma música encontrada…</p>
          )}
                       </div>
                     </div>
                   </div>
                 </li>
               
             </ul>
           </main>
   
         
   <Footer />
  </>
);

}


