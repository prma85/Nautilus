import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calculator from "./components/calculator";

function App() {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign:"center" }}>
          <Calculator />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
