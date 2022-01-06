import Title from '../../components/Title';
import Head from 'next/head';
import { getProduct, getProducts } from '../../lib/products';

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
  try{
  const product = await getProduct(id);
  return { props: { product }, revalidate: parseInt(process.env.REVALIDATE_SECONDS) };
  } catch(err){
      if(err instanceof ApiError && err.status===404){
        return { notfound: true };
      }
      throw err;
  }

}
export default function ProductPage({product}) {
  return (
    <>
      <Head>
        <title>Next Shop</title>
        <meta name='description' content='Next Shop App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-6 py-4'>
        <Title>{product.title}</Title>
        <p>
            {product.description}
        </p>
      </main>
    </>
  );
}
