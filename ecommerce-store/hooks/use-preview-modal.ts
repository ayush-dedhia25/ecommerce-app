import { create } from "zustand";

import { Product } from "@/types";

type PreviewModalStore = {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
};

const usePreviewModalStore = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen(data: Product) {
    return set({ data, isOpen: true });
  },
  onClose() {
    return set({ isOpen: false });
  },
}));

export default usePreviewModalStore;
