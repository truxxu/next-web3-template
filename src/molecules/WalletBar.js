import React from "react";

import { useWalletInfo } from "../hooks";
import { useWeb3 } from "../context/web3-context";

const WalletBar = () => {
  const { requireInstall } = useWeb3();
  const { account, network } = useWalletInfo();

  return (
    <section className="text-white my-5">
      {account.data && network.isSupported && (
        <div className="p-4 bg-violet-500 rounded-lg">
          <p className="text-xl break-words">
            Welcome, <strong className="text-2xl">{account.data}</strong>
          </p>
          {network.data && (
            <div>
              <span>Currently on </span>
              <strong className="text-2xl">{network.data}</strong>
            </div>
          )}
        </div>
      )}
      {network.hasInitialResponse && !network.isSupported && (
        <div className="bg-red-400 p-4 rounded-lg">
          <div>Connected to wrong network</div>
          <div>
            Connect to: {` `}
            <strong className="text-2xl">{network.target}</strong>
          </div>
          {network.data && (
            <div>
              <span>Currently on </span>
              <strong className="text-2xl">{network.data}</strong>
            </div>
          )}
        </div>
      )}
      {requireInstall && (
        <div className="bg-yellow-500 p-4 rounded-lg">
          Cannot connect to network. Please install Metamask.
        </div>
      )}
    </section>
  );
};

export { WalletBar };
