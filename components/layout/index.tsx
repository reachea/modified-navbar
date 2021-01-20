import { ApolloProvider } from "@apollo/client";
import React from "react";

import { client } from "../../lib/apollo";
import { ArticleDetectController } from "../ArticleDetectController";

// components
import { NavContainer } from "../transition";

export const Layout: React.FC<any> = (props: any) => {
  return (
    <>
      <ApolloProvider client={client}>
        <ArticleDetectController>
          <NavContainer />
          {props.children}
        </ArticleDetectController>
      </ApolloProvider>
    </>
  );
};
