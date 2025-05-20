// UsersList.tsx
import { useState } from 'react';
import { Header } from '../components/header';
import { users } from '../data/data';
import {UserIcon } from '@phosphor-icons/react';
import { Footer } from '../components/footer';

export const UsersList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedUsers, setDisplayedUsers] = useState(users);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setDisplayedUsers(filtered);
  };
  const present = displayedUsers.map(user => (
            <li  key={user.id} className="mb-10 w-80 flex bg-black px-6 py-6 border-4  rounded-3xl solid #ccc text-2xl border-white opacity-80 ">
              <UserIcon size={40}  className='inline fill-amber-50'/>{user.name }
              
            </li>
          ))

  return (
    <>
      <Header title="Usuários"  search={handleSearch} entrySearch={searchQuery} />
      <main className='flex flex-col flex-1 py-6 px-6 bg-[url(./img/bg-4.png)]  bg-black   text-amber-500 text font-bold  '>
        <h2 className='text-3xl pb-5 text-amber-50'>Usuários</h2>
        <ul>
        {present}
        </ul>
      </main>
      <Footer/>
    </>
  );
};
