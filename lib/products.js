import { fetchJson } from './api';

const {CMS_URL} = process.env

export async function getProduct(id) {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  return stripProduct(product);
}

export async function getProducts() {
  console.log('getProducts', CMS_URL);
  const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(stripProduct);
}
 
function stripProduct(product) {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: '$'+ product.price.toFixed(2),
    pictureUrl: CMS_URL + product.picture.url,
  };
}