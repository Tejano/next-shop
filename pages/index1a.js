//Option 1a: fetch the products on the server side in getStaticProp
import Head from 'next/head';
import Title from '../components/Title';
import {getProducts} from '../lib/products';

// const products = [
//   { id: 1, title: 'First Product' },
//   { id: 2, title: 'Second Product' },
//   { id: 3, title: 'Third Product' },
// ];
export async function getStaticProps() {
  console.log('[HomePage] getStaticProps()');
  const products = await getProducts();
  return { props: { products } };
}
export default function HomePage({ products }) {
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