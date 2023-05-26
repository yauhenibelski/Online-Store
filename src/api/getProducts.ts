import { baseUrl } from '../scripts/global_const';

export class FetchProducts {
  static async getAll(limit: number) {
    const response = await fetch(`${baseUrl}products?limit=${limit}`);
    return response.json();
  }
}
