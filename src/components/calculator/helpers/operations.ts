import { DefaultStoreType } from '../helpers';

export const updateValues = (state: DefaultStoreType, newOperation: string) => {
  let total = state.total;
  let last = state.history[state.history.length - 1].slice();

  last.push(state.displayValue);
  last.push(newOperation);

  let lastOperation = last[last.length - 3];
  let value = parseFloat(state.displayValue);

  let allHistory = state.history.slice().pop() || ([] as Array<string>);
  let history = [allHistory];

  if (!lastOperation) {
    history.push(last);
    return { total: value, history };
  }

  if (newOperation === '=') {

    console.log()
  }

 


 
    switch (lastOperation) {
      case '+':
        total = state.total + value;
        break;
      case '-':
        total = state.total - value;
        break;
      case '*':
        total = state.total * value;
        break;
      case '/':
        total = state.total / value;
        break;
    }
  

  history.push(last);

  return { total, history };
};
