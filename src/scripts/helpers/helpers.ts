import { Products } from '../types';

export function getNameDirectory({ products }: Products, get: 'category' | 'brand'): string[] {
  const names: string[] = [];

  products.reduce((acc: string[], product) => {
    acc.push(product[get]);
    return acc;
  }, names);

  return (
    names.map((str: string) => {
      return (
        get === 'brand' ? str[0].toLocaleUpperCase() + str.slice(1, str.length)
          : str[0].toLocaleUpperCase() + str.slice(1, -1).replaceAll('-', ' ')
      );
    })
      .sort()
      .filter((elem, i, arr) => elem !== arr[i + 1])
  );
}

export function getMaxMinPrice({ products }: Products, get: 'maxPrice' | 'minPrice') {
  const price = products.map((e) => e.price);
  const maxPrice = Math.max(...price);
  const minPrice = Math.min(...price);

  return get === 'maxPrice' ? maxPrice : minPrice;
}

export function formatText(string: string) {
  const str = string[0].toLocaleUpperCase() + string.slice(1, string.length);
  return str.replace('-', ' ');
}
