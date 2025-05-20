// UsersList.tsx
import { useState } from 'react';
import { Header } from '../components/header';
import { users } from '../data/data';
import {UserSquareIcon } from '@phosphor-icons/react';
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
            <li  key={user.id} className="mb-8 px-6 py-6 border-5 rounded-3xl solid #ccc text-lg ">
              <UserSquareIcon size={40} className='inline'/>{user.name }
            </li>
          ))

  return (
    <>
      <Header title="Usuários" search={handleSearch} entrySearch={searchQuery} />

      <main className='min-h-screen py-8 px-6 bg-black text-white '>
        <h2 className='py-5'>Usuários</h2>
        <ul>
        {present}
        </ul>
        
      </main>
      <Footer/>
    </>
  );
};
