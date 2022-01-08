import Title from '../../components/Title';
import Head from 'next/head';
import { getProduct, getProducts } from '../../lib/products';
import Image from 'next/image';

export async function getStaticPaths(id) {
  const products = await getProducts(id);
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { id } }) {
  try {
    const product = await getProduct(id);
    return {
      props: { product },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS),
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { notfound: true };
    }
    throw err;
  }
}
export default function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>Next Shop</title>
        <meta name='description' content='Next Shop App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-6 py-4'>
        <Title>{product.title}</Title>
        <div className='flex flex-col lg:flex-row'>
          {' '}
          <div>
            <Image
              src={product.pictureUrl}
              alt=''
              width={640}
              height={480}
            ></Image>
          </div>
          <div className='flex-1 lg:ml-4'mt-2>
            <p className="text-sm">{product.description}</p>
            <p className="text-lg font-bold">Price: {product.price}</p>
          </div>
         </div>
      </main>
    </>
  );
}
