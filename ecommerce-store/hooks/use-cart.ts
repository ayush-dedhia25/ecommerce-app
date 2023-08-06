import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

type T_CartStore = {
  items: Product[];
  addItem(data: Product): void;
  removeItem(id: string): void;
  removeAll(): void;
};

const useCartStore = create(
  persist<T_CartStore>(
    (set, get) => ({
      items: [],
      addItem(data: Product) {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);
        if (existingItem) {
          return toast.error("Item already in cart.");
        }
        set({ items: [...get().items, data] });
        toast.success("Item added to cart successfully.");
      },
      removeItem(id: string) {
        const itemsWithoutUnwantedItem = get().items.filter(
          (item) => item.id !== id
        );
        set({ items: itemsWithoutUnwantedItem });
        toast.success("Item removed from the cart.");
      },
      removeAll() {
        return set({ items: [] });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCartStore;
