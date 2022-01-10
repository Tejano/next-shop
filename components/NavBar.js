import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchJson } from '../lib/api.js';
export default function NavBar() {
  //const user = {name:'Alice'}
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
     const user = await fetchJson('/api/user');
    })();
  }, []);

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
              <button>Sign Out</button>
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
