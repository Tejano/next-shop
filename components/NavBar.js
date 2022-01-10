import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchJson } from '../lib/api.js';
export default function NavBar() {
  //const user = {name:'Alice'}
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      try {
        const user = await fetchJson('/api/user');
        setUser(user);
      } catch (err) {
        //Not Signed In
      }
    })();
  }, []);

  const handleSignOut = async () => {
    await fetchJson('/api/logout');
    setUser(undefined);
  };
  console.log('[NavBar] user:', user);

  return (
    <nav className='px-2 py-1 text-sm'>
      <ul className='flex gap-2'>
        <li className='text-lg font-extrabold'>
          <Link href='/'>
            <a>Next Shop</a>
          </Link>
        </li>
        <li role='separator' className='flex-1'></li>
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href='/sign-in'>
              <a>Sign In</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
