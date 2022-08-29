import React from "react";

const Navbar = () => {
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex flex-col xs:flex-row">
            <div>
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
          </div>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
