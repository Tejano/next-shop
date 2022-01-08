import ProductCard from '../components/ProductCard';
import { getProducts } from '../lib/products';
import Page from '../components/Page.js';
export async function getStaticProps() {
  try {
    console.log('[HomePage] getStaticProps()');
    const products = await getProducts();
    return {
      props: { products },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS),
    };
  } catch (err) {
    return { notFound: true };
  }
}
export default function HomePage({ products }) {
  console.log('[HomePage] render:', products);

  return (
    <Page title='Indoor Plants'>
      <ul className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Page>
  );
}
