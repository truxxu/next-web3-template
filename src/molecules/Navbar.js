import React from "react";

import { PriceCard, Button } from "../atoms";
import { useWeb3 } from "../context/web3-context";

const Navbar = () => {
  const { connect, isLoading, requireInstall } = useWeb3();

  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex flex-row">
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
            <PriceCard />
            {isLoading ? (
              <Button disabled>Loading...</Button>
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
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
