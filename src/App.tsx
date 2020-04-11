import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CalculatorApp from './components/calculator';

function App() {
  return (
    <Container>
      <Row className='justify-content-lg-center'>
        <Col md={8} lg={6}>
          <CalculatorApp />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
