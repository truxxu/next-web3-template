import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../atoms";

const ProductCard = ({ data }) => {
  return (
    <div className="border-solid border-2 border-violet-500 rounded-xl shadow-md overflow-hidden">
      <div className="flex h-full">
        <div className="flex-1 h-full next-image-wrapper">
          <Image
            className="object-cover"
            src={data.coverImage}
            layout="responsive"
            width="200"
            height="300"
            alt={data.title}
          />
        </div>
        <div className="p-8 pb-4 flex-2">
          <div className="flex flex-col">
            <div className="uppercase mb-4 tracking-wide text-sm text-indigo-500 font-semibold">
              {data.type}
            </div>
            <div className="text-4xl font-bold mb-4">{data.title}</div>
            <div className="text-base mb-8">{data.description}</div>
            <div className="flex flex-row justify-between items-center">
              <div className="text-4xl font-bold mb-4 text-indigo-500">
                {data.currency} ${data.price}
              </div>
              <Button onClick={() => console.log("click!")}>Buy now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
