import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { CalculatorStore } from '../reducers';
import { Keyboard } from './';

export const Calculator = () => {
  const store = CalculatorStore.useStore();

  return (
    <Container>
      <Row className='no-gutters'>
        <Col md={8}>
          <Alert key={0} variant='secondary' style={{ marginBottom: 0 }}>
            <p>{store.history[store.history.length - 1]?.join(' ') || ' '}</p>
            {store.displayValue}
          </Alert>
          <Keyboard />
        </Col>
        <Col md={4} style={{ backgroundColor: '#f7f7f7', textAlign: 'right' }}>
          <h5 style={{ padding: '5px 15px' }}>History</h5>
          {store.historyDisplay.map((history, key) => (
            <div key={key}>
              {history.operations}
              <br />
              <span style={{ fontSize: '140%' }}>{history.total}</span>
              <hr />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
