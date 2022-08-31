import { WalletBar } from "../../src/molecules";
import { List } from "../../src/organisms";
import { getAllProducts } from "../../content/products/fetcher";

export default function Store({ products }) {
  return (
    <>
      <WalletBar />
      <h1 className="text-3xl font-bold">Store Page</h1>
      <List products={products} />
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllProducts();
  return {
    props: {
      products: data,
    },
  };
}
