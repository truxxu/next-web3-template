import React from "react";

import { PriceCard, Button } from "../atoms";
import { useWeb3 } from "../context/web3-context";

import { useAccount } from "../hooks";
import { trimAddress } from "../utils/parsing";

const Navbar = () => {
  const { connect, isLoading, requireInstall } = useWeb3();
  const { account } = useAccount();

  return (
    <section>
      <div className="relative">
        <nav className="relative" aria-label="Global">
          <div className="flex flex-row justify-between">
            <div className="flex items-center">
              <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                Home
              </a>
              <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                Store
              </a>
              <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </div>
            <div className="flex flex-row">
              <PriceCard />
              {isLoading ? (
                <Button disabled>Loading...</Button>
              ) : account.data ? (
                <Button>{trimAddress(account.data)}</Button>
              ) : requireInstall ? (
                <Button
                  onClick={() =>
                    window.open("https://metamask.io/download.html", "_blank")
                  }
                >
                  Install Metamask
                </Button>
              ) : (
                <Button onClick={connect}>Connect</Button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
