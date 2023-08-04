"use client";

import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Product } from "@/types";

import Currency from "./currency";
import IconButton from "./icon-button";

type ProductCardProps = {
  data: Product;
};

function ProductCard({ data }: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and Actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={data.images[0].url}
          alt="Image"
          className="aspect-square object-cover rounded-md"
          fill
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex justify-center gap-x-6">
            <IconButton
              icon={<Expand size={20} />}
              onClick={() => {}}
              className="text-gray-600"
            />
            <IconButton
              icon={<ShoppingCart size={20} />}
              onClick={() => {}}
              className="text-gray-600"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="text-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
}

export default ProductCard;
