import { getMaxMinPrice } from './helpers/helpers';
import catalog from '../assets/data/products.json';

export const maxPrice = getMaxMinPrice(catalog, 'maxPrice');
export const minPrice = getMaxMinPrice(catalog, 'minPrice');
