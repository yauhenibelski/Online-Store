import { getMaxMinPrice } from './helpers/helpers';
import catalog from '../assets/data/products.json';

const { products } = catalog;

export const maxPrice = getMaxMinPrice(products, 'maxPrice');
export const minPrice = getMaxMinPrice(products, 'minPrice');
