import React from "react";

import { ProductCard } from "../molecules";

const List = ({ products }) => {
  if (!products) {
    return (
      <p className="text-gray-400 text-center mt-5 text-2xl">
        No products to show
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 my-4 grid-cols-1">
      {products?.map((item) => {
        return <ProductCard key={item.id} data={item} />;
      })}
    </div>
  );
};

export { List };
