import { ApolloProvider } from "@apollo/client";
import React, { useState } from "react";

import { ScrollContext } from "../../contexts/scroll";
import { client } from "../../lib/apollo";
import { ArticleDetectController } from "../ArticleDetectController";

// components
import { NavContainer } from "../transition";

export const Layout: React.FC<any> = (props: any) => {
  const [viewOne, setViewOne] = useState(null);

  return (
    <>
      <ApolloProvider client={client}>
        <ScrollContext.Provider value={{ viewOne, setViewOne }}>
          <ArticleDetectController>
            <NavContainer />
            {props.children}
          </ArticleDetectController>
        </ScrollContext.Provider>
      </ApolloProvider>
    </>
  );
};
