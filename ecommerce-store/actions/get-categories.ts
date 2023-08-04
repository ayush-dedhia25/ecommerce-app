import { Category } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories` as string;

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(url);
  return response.json();
}
