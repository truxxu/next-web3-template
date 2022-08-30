import React from "react";

import { useTokenPrice } from "../hooks/useTokenPrice";

const PriceCard = () => {
  const { token } = useTokenPrice();
  return (
    <div className="p-3 border-solid border-2 border-violet-500 rounded font-medium mr-8 text-violet-500">
      {token.isValidating ? "ETH = ***" : `ETH = $${token.data.toFixed()}`}
    </div>
  );
};

export { PriceCard };
