import { Dispatch, SetStateAction } from 'react';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type Catalog = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type SortValue = {
  categories: string[];
  brand: string[];
  sortBy: string;
  pageLimit: string;
  sortPriceMin: number;
  sortPriceMax: number;
}
export type ContextType ={
  minPriceInCatalog?: number,
  maxPriceInCatalog?: number,
  products?: Product[],
  sorting?: SortValue,
  setSorting?: React.Dispatch<React.SetStateAction<SortValue>>,
}
export type CartProducts = [Product[], Dispatch<SetStateAction<Product[]>>];
