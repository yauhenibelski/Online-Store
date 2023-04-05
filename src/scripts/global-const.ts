import { Products } from './types';

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
