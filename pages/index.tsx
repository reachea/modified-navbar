import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "../contexts/scroll";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import { Layout } from "../components/layout";
import { useQuery } from "@apollo/client";
import { ArticleDetectContext } from "../components/ArticleDetectController";
import ArticleDetect from "../components/ArticleDetect";
import Article from "../components/Article";
import { CHARACTERS_QUERY } from "../lib/graph";

function ArticleBody() {
  const { data, loading } = useQuery(CHARACTERS_QUERY);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {data.characters.results.map((x) => {
        return (
          <ArticleDetect title={x.name} id={x.id}>
            <Article title={x.name} image={x.image} id={x.id} />
          </ArticleDetect>
        );
      })}
    </>
  );
}

const App: React.FC<any> = (): any => {
  return (
    <>
      <Layout>
        <BodyContainer id="container">
          <ArticleBody />
        </BodyContainer>
      </Layout>
    </>
  );
};

const BodyContainer = styled(Container)`
  margin-top: 150px;
`;

export default App;
