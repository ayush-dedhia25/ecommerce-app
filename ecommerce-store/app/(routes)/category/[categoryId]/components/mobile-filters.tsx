"use client";

import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";

import Filter from "./filter";

type MobileFiltersProps = {
  sizes: Size[];
  colors: Color[];
};

function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters
        <Plus size={20} />
      </Button>

      <Dialog open={open} as="div" className="z-40 lg:hidden" onClose={onClose}>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black opacity-25" />
        {/* Dialogue Position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto h-full w-full flex flex-col max-w-xs overflow-y-auto py-4 bg-white pb-6 shadow-xl">
            {/* Close Button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            {/* Render filters */}
            <Filter valueKey="sizeId" name="Size" data={sizes} />
            <Filter valueKey="colorId" name="Color" data={colors} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default MobileFilters;
