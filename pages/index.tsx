import React from "react";

import styled from "styled-components";

import { Container, Card, Button } from "react-bootstrap";

const App: React.FC<any> = (): any => {
  return (
    <>
      <BodyContainer>
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
    </>
  );
};

export default App;

const BodyContainer = styled(Container)`
  margin-top: 120px;
  height: 1500vh;
`;
