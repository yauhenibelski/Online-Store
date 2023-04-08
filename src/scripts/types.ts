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
  show: string;
  price: {
    min: number;
    max: number;
  }
}
