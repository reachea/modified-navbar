import React from "react";

// components
import { NavContainer } from "../transition";

export const Layout: React.FC<any> = (props: any) => {
  return (
    <>
      <NavContainer />
      {props.children}
    </>
  );
};
