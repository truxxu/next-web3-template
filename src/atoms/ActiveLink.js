import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, activeLinkClass, ...props }) => {
  const { pathname } = useRouter();
  let className = children.props.className || "";

  if (pathname === props.href) {
    className = `${className} ${
      activeLinkClass ? activeLinkClass : "!text-violet-500"
    }`;
  }

  return <Link {...props}>{React.cloneElement(children, { className })}</Link>;
};

export { ActiveLink };
