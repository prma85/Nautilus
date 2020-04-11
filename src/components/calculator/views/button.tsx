import React from 'react';
import { Button as BSButton, ButtonProps as BSButtonProps, Col } from 'react-bootstrap';
import { CalculatorStore } from '../reducers';
import { Action } from '../actions';

interface ButtonProps extends BSButtonProps {
  value: string;
  vtype: number;
  bigger: boolean;
}

export const Button = (props: ButtonProps) => {
  let variant = props.variant;
  const dispatch = CalculatorStore.dispatch();

  let onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (props.value.match(/^[0-9]+$/) || props.value === '.') {
      dispatch({ type: Action.Number, payload: props.value });
    } else if (props.value === 'CE') {
      dispatch({ type: Action.Clean, payload: props.value });
    } else if (props.value === '%') {
      dispatch({ type: Action.Percentace, payload: props.value });
    } else if (props.value === '=') {
      dispatch({ type: Action.Total, payload: props.value });
    } else if (props.value === '«') {
      dispatch({ type: Action.DeleteLast, payload: props.value });
    } else {
      dispatch({ type: Action.Operation, payload: props.value });
    }
  };

  switch (props.vtype) {
    case 0:
      variant = 'secondary';
      break;
    case 1:
      variant = 'warning';
      break;
    case 2:
      variant = 'dark';
      break;
  }

  return (
    <Col md={props.bigger ? 6 : 3}>
      <BSButton className='border rounded-0 border-white' block size='lg' onClick={onClick} variant={variant}>
        {props.value}
      </BSButton>
    </Col>
  );
};
