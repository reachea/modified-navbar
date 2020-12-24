import React, { useState } from "react";

import { ScrollContext } from "../../contexts/scroll";

// components
import { NavContainer } from "../transition";

export const Layout: React.FC<any> = (props: any) => {
  const [viewOne, setViewOne] = useState(null);
  const [viewTwo, setViewTwo] = useState(null);

  return (
    <>
      <ScrollContext.Provider
        value={{ viewOne, setViewOne, viewTwo, setViewTwo }}
      >
        <NavContainer />
        {props.children}
      </ScrollContext.Provider>
    </>
  );
};
