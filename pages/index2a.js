//Option 2a: fetch the products on the client side
import Head from 'next/head';
import Title from '../components/Title';
import { useEffect, useState } from 'react';
import { getProducts } from '../lib/products';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  console.log('[HomePage] render:', products);

  return (
    <>
      <Head>
        <title>Next Shop</title>
        <meta name='description' content='Next Shop App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='px-6 py-4'>
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
