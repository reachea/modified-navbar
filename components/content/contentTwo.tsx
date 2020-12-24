import React, { useContext, useEffect } from "react";
import { ScrollContext } from "../../contexts/scroll";

import styled from "styled-components";

import { Container, Card, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

export const ContentTwo = () => {
  const [element, view] = useInView();

  const scrollTwoContext = useContext(ScrollContext);

  useEffect(() => {
    scrollTwoContext.setViewTwo(view);
  }, [view]);

  return (
    <BodyContainer ref={element}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </BodyContainer>
  );
};

const BodyContainer = styled(Container)`
  margin-top: 120px;
  height: 100vh;
`;
