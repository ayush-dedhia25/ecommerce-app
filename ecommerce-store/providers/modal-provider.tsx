"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";

type ModalProviderProps = {};

function ModalProvider({}: ModalProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <PreviewModal />
    </>
  );
}

export default ModalProvider;
