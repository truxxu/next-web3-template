import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <button
      className="p-3 text-base xs:px-8 disabled:opacity-50 disabled:cursor-not-allowed  border-solid border-2 border-violet-500 rounded font-medium mr-8 text-violet-500"
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
