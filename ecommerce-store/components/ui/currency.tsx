"use client";

import { useEffect, useState } from "react";

import { formatter } from "@/lib/utils";

type CurrencyProps = {
  value: number | string;
};

function Currency({ value }: CurrencyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div className="font-semibold">{formatter.format(+value)}</div>;
}

export default Currency;
