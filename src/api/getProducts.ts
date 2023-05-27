import { baseUrl } from '../scripts/global_const';

export class FetchProducts {
  static async getAll() {
    const response = await fetch(`${baseUrl}products?limit=0`);
    return response.json();
  }
}
