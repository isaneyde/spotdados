import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import type { userProps } from '../types/users'
import { useLocation, useNavigate } from "react-router-dom";


export const ListMusic = () => {
  const [searchQuery, setSearchQuery] = useState('');
const [details, setDetails] = useState<string[]>([]);
const {state} = useLocation();
const navigate = useNavigate();
const user:userProps | undefined = state?.user;

useEffect(()=>{
  if(!user){
    navigate('/list-users');
  } else {
    setDetails(user.mostListenedSongs)
  }
},[user,navigate])

const handleSearch = (query: string) => {
  setSearchQuery(query);
  const filtered = user?.mostListenedSongs.filter((list) =>
    list.toLowerCase().includes(query.toLowerCase())
  ) || []
  setDetails(filtered);
};
 if (!user) return null

 const getImage=(name:string)=>{
  const file=name.toLowerCase().replace(' ','-')
  return `/img/${file}.png`
 }
return (
  <>
    <Header
      entrySearch={searchQuery}
      search={handleSearch}
      title="Detalhes" 
    />

    <main className="min-h-screen overflow-y-auto px-4 bg-[url(./img/bg-4.png)] bg-black">
             <h2 className="text-lg font-semibold text-amber-50 my-3">{user.name}</h2>
             <ul className="space-y-3">
                 <li className="border-4 bg-black  border-amber-50 mt-5 py-4 px-3 flex flex-col items-start rounded-3xl   "
                 >
                       <p className="text-lg text-gray-500">
                         Músicas mais ouvidas:
                       </p>
                       <div className="flex flex-col gap-1 mt-1">
                         {details.length > 0 ? (
            details.map((music, i) => (
              <span
                key={i}
                className="flex h-20 w-90 justify-between items-center mt-3 bg-amber-500 text-black  px-3 py-1 opacity-70 rounded-2xl text-sm align-middle"
              >
                <img src = {getImage(music)}
              alt = {music}
              className="w-24 h-18 rounded-full object-cover" />
                <span className="text-2xl font-medium">{music}</span>
              </span>
            ))
          ) : (
            <p className="text-gray-500">Nenhuma música encontrada…</p>
          
      
          )}
                       </div>
                 </li>
               
             </ul>
           </main>
   <Footer  />
  </>
);

}


