// UsersList.tsx
import { useState } from 'react';
import { Header } from '../components/header';
import { users } from '../data/data';
import {UserSquareIcon } from '@phosphor-icons/react';

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
            <li  key={user.id} style={{marginBottom: '0.5rem', border: '5px solid #ccc', borderRadius: '20px' , padding: '0.5rem'}}>
              <UserSquareIcon size={32} />{user.name}
            </li>
          ))

  return (
    <>
      <Header title="Usuários" search={handleSearch} entrySearch={searchQuery} />

      <main style={{ height:'100 vh' ,padding: '1rem', background:'black', color:"white"}}>
        <h2>Usuários</h2>
        <ul>
        {present}
        </ul>
      </main>
    </>
  );
};
