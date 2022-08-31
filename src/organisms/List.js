import React from "react";

const List = ({ products }) => {
  if (!products) {
    return (
      <p className="text-gray-400 text-center mt-5 text-2xl">
        No products to show
      </p>
    );
  }

  return (
    <div className="flex flex-row">
      {products?.map((item) => {
        return (
          <div
            key={item.id}
            className="border-solid border-2 border-violet-500 rounded"
          >
            List
          </div>
        );
      })}
    </div>
  );
};

export { List };
