import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products` as string;

type Query = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};

export async function getProducts(query: Query): Promise<Product[]> {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const response = await fetch(url);
  return response.json();
}
