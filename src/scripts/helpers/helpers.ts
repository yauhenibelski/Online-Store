import { Product, SortValue } from '../types';

export function getNameDirectory(products: Product[], get: 'category' | 'brand'): string[] {
  const names: string[] = [];

  products.reduce((acc: string[], product) => {
    acc.push(product[get]);
    return acc;
  }, names);

  return (
    names.map((str: string) => {
      return (
        get === 'brand' ? str[0].toLocaleUpperCase() + str.slice(1, str.length)
          : str[0].toLocaleUpperCase() + str.slice(1, str.length).replaceAll('-', ' ')
      );
    })
      .sort()
      .filter((elem, i, arr) => elem !== arr[i + 1])
  );
}

export function getMaxMinPrice(products: Product[], get: 'maxPrice' | 'minPrice') {
  const price = products.map((e) => e.price);
  const maxPrice = Math.max(...price);
  const minPrice = Math.min(...price);

  return get === 'maxPrice' ? maxPrice : minPrice;
}

export function formatText(string: string) {
  const str = string[0].toLocaleUpperCase() + string.slice(1, string.length);
  return str.replace('-', ' ');
}

export function sortProducts(products: Product[], sortValue: SortValue) {
  const category = products.filter((p) => {
    return !sortValue.categories.length
      ? p
      : sortValue.categories.includes(formatText(p.category));
  });

  const brand = category.filter((p) => {
    return !sortValue.brand.length
      ? p
      : sortValue.brand.includes(formatText(p.brand));
  });

  const productsFilteredByPrice = [...brand.filter((p) => p.price >= sortValue.price.min
    && p.price <= sortValue.price.max)];

  const sortedProducts = (product: Product[], sortVal: SortValue) => {
    const [sortBy, direction] = sortVal.sortBy.split('_');

    const sort = product.sort((a, b) => {
      const aValue: string = Object.getOwnPropertyDescriptor(a, sortBy)?.value;
      const bValue: string = Object.getOwnPropertyDescriptor(b, sortBy)?.value;
      return +aValue - +bValue;
    });

    if (sortVal.sortBy === '') {
      return product;
    }
    if (direction === 'ASC') {
      return sort;
    }
    return sort.reverse();
  };

  return {
    sortedProducts: sortedProducts(productsFilteredByPrice, sortValue),
    currentBrands: !getNameDirectory(category, 'brand').length
      ? ['No Brands'] : getNameDirectory(category, 'brand'),
  };
}
export function showProducts(products: Product[], amountProducts: string) {
  if (products.length < +amountProducts) {
    return [products];
  }
  const arr: (Product)[][] = [];
  let q: Product[] = [];

  for (let i = 0, j = 0; i < products.length; i += 1) {
    if (j < +amountProducts) {
      q.push(products[i]);
      j += 1;
    } else {
      arr.push(q);
      q = [];
      j = 0;
    }
  }
  return [...arr, [...q]];
}
