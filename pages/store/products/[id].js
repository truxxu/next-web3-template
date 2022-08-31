import Image from "next/image";

import { getAllProducts } from "../../../content/products/fetcher";

export default function Product({ product }) {
  return (
    <>
      <div>
        <Image
          className="object-cover"
          src={product.coverImage}
          layout="fixed"
          width="200"
          height="300"
          alt={product.title}
        />
      </div>
      <div className="text-base uppercase">{product.type}</div>
      <div className="text-3xl font-bold">{product.title}</div>
      <div className="text-base">{product.description}</div>
      <div className="text-base">
        {product.available ? "Available" : "Not available"}
      </div>
      <div className="mt-4">
        {product.features.map((item, index) => {
          return (
            <div className="text-base" key={index}>
              *{item}
            </div>
          );
        })}
      </div>
      <div className="text-base">
        {product.currency} ${product.price}
      </div>
    </>
  );
}

export function getStaticPaths() {
  const { data } = getAllProducts();

  return {
    paths: data.map((product) => ({
      params: {
        id: product.id,
      },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const { data } = getAllProducts();
  const product = data.filter((c) => c.id === params.id)[0];

  return {
    props: {
      product,
    },
  };
}
