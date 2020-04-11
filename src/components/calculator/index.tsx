import React from 'react';
import './styles/index.scss';
import { CalculatorStore } from './reducers';
import { Calculator } from './views';
export default () => {
  return (
    <CalculatorStore.Provider>
      <Calculator />
    </CalculatorStore.Provider>
  );
};
