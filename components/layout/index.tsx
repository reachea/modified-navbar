import React from "react";
import { Nav } from "react-bootstrap";

// components
import { NavBar } from "../navbar";
import { SubNavBar } from "../subnavbar";

export const Layout: React.FC<any> = (props: any) => {
  return (
    <>
      <NavBar />
      <SubNavBar />
      {props.children}
    </>
  );
};
