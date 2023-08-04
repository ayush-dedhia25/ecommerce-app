import { Billboard } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards` as string;

export async function getBillboard(id: string): Promise<Billboard> {
  const response = await fetch(`${url}/${id}`);
  return response.json();
}
