import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="py-6">
            <p className="text-white text-sm text-primary-2 font-bold">
              © {new Date().getFullYear()} Truxxu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
