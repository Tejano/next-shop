import { getProducts } from '../../lib/products';

async function handler(req, res) {
 console.log('[/api/product] handler')
 const products = await getProducts();
  res.status(200).json(products);
}

export default handler;
