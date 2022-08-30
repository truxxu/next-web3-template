import React from "react";

import { useTokenPrice } from "../hooks/useTokenPrice";

const PriceCard = () => {
  const { token } = useTokenPrice();
  return (
    <div className="w-125 p-3 text-center border-solid border-2 border-violet-500 rounded font-medium m-4 text-violet-500">
      {token.isValidating ? "ETH = ****" : `ETH = $${token.data.toFixed()}`}
    </div>
  );
};

export { PriceCard };
