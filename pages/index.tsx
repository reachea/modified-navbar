import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "../contexts/scroll";
import styled from "styled-components";
import { Button, Card, Container } from "react-bootstrap";

const App: React.FC<any> = (): any => {
  const arr = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ]
  const [element, view] = useInView();

  const scrollOneContext = useContext(ScrollContext);

  useEffect(() => {
    scrollOneContext.setViewOne(view);
  }, [view]);

  return (
    <>
      <BodyContainer ref={element}>
        {
          arr.map(x => {
            return(
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
            )
          })
        }
      </BodyContainer>
    </>
  );
};

const BodyContainer = styled(Container)`
  margin-top: 120px;
  height: 100vh;
`;

export default App;
