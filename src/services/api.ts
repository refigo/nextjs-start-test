import { List, ListDetail } from '@/types';

const API_BASE_URL = 'https://books-api.nomadcoders.workers.dev';

export async function getAllLists(): Promise<List[]> {
  const response = await fetch(`${API_BASE_URL}/lists`);
  if (!response.ok) {
    throw new Error('Failed to fetch bestseller lists');
  }
  const data = await response.json();
  return data.results;
}

export async function getListByName(name: string): Promise<ListDetail> {
  const response = await fetch(`${API_BASE_URL}/list?name=${name}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch list: ${name}`);
  }
  const data = await response.json();
  return data.results;
}
