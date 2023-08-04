import { Tab } from "@headlessui/react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

type GalleryTabProps = {
  image: ImageType;
};

function GalleryTab({ image }: GalleryTabProps) {
  return (
    <Tab className="relative flex justify-center items-center aspect-square cursor-pointer rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt=""
              className="object-cover object-center"
              fill
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
}

export default GalleryTab;
