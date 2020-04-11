import React from 'react';
import { Row } from 'react-bootstrap';
import { Button } from './';

export const Keyboard = () => {
  const renderButtton = (value: string, type: number, bigger = false) => {
    return <Button value={value} vtype={type} bigger={bigger} />;
  };
  return (
    <>
      <Row className='no-gutters'>
        {renderButtton('CE', 2, true)}
        {renderButtton('%', 2)}
        {renderButtton('/', 1)}
      </Row>
      <Row className='no-gutters'>
        {renderButtton('7', 0)}
        {renderButtton('8', 0)}
        {renderButtton('9', 0)}
        {renderButtton('*', 1)}
      </Row>
      <Row className='no-gutters'>
        {renderButtton('4', 0)}
        {renderButtton('5', 0)}
        {renderButtton('6', 0)}
        {renderButtton('-', 1)}
      </Row>
      <Row className='no-gutters'>
        {renderButtton('1', 0)}
        {renderButtton('2', 0)}
        {renderButtton('3', 0)}
        {renderButtton('+', 1)}
      </Row>
      <Row className='no-gutters'>
        {renderButtton('0', 0, true)}
        {renderButtton('.', 0)}
        {renderButtton('=', 1)}
      </Row>
    </>
  );
};
