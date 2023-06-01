import { baseUrl } from '../scripts/global_const';

export class FetchProducts {
  static async getAll() {
    const response = await fetch(`${baseUrl}products?limit=0`);
    return response.json();
  }

  static async getSingleProduct(id: number) {
    const response = await fetch(`${baseUrl}products/${id}`);
    return response.json();
  }

  static async getCategories() {
    const response = await fetch(`${baseUrl}products/categories`);
    return response.json();
  }

  static async getProductsOfCategory(categories: string) {
    const response = await fetch(`${baseUrl}products/category/${categories}`);
    return response.json();
  }
}
