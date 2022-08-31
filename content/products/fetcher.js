import products from "./index.json";

export const getAllProducts = () => {
  return {
    data: products,
  };
};
