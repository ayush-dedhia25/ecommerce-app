import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories` as string;

export async function getCategory(id: string): Promise<Category> {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}
