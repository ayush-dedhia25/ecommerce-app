"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import useCartStore from "@/hooks/use-cart";

import Button from "./ui/button";

type NavbarActionsProps = {};

function NavbarActions({}: NavbarActionsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cart = useCartStore();
  const router = useRouter();

  if (!mounted) return null;

  return (
    <div className="flex items-center ml-auto gap-x-4">
      <Button
        className="flex items-center px-4 py-2 bg-black rounded-full"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}

export default NavbarActions;
