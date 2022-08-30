import useSWR from "swr";

const URL = process.env.NEXT_PUBLIC_PRICE_URL;

const fetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();

  return json.market_data.current_price.usd ?? null;
};

export const useTokenPrice = () => {
  const { data, ...rest } = useSWR(URL, fetcher, { refreshInterval: 20000 });

  return { token: { data, ...rest } };
};
