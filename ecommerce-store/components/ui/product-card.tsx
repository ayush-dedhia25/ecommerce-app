"use client";

import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import useCartStore from "@/hooks/use-cart";
import usePreviewModalStore from "@/hooks/use-preview-modal";
import type { Product } from "@/types";

import Currency from "./currency";
import IconButton from "./icon-button";

type ProductCardProps = {
  data: Product;
};

function ProductCard({ data }: ProductCardProps) {
  const router = useRouter();
  const previewModal = usePreviewModalStore();
  const cart = useCartStore();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl"
    >
      {/* Images and Actions */}
      <div className="relative bg-gray-100 aspect-square rounded-xl">
        <Image
          src={data.images[0].url}
          alt="Image"
          className="object-cover rounded-md aspect-square"
          fill
        />
        <div className="absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5">
          <div className="flex justify-center gap-x-6">
            <IconButton
              icon={<Expand size={20} />}
              onClick={onPreview}
              className="text-gray-600"
            />
            <IconButton
              icon={<ShoppingCart size={20} />}
              onClick={onAddToCart}
              className="text-gray-600"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="text-lg text-semibold">{data.name}</p>
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
