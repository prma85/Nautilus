import { defaultStore, DefaultStoreType, makeStore, IAction, updateValues } from '../helpers';
import { Action } from '../actions';

export const calculatorReducer = (state: DefaultStoreType, action: IAction<Action, string>) => {
  switch (action.type) {
    case Action.Number:
      let displayValue = state.displayValue;
      let actualTotal = state.total.toString();
      let calculated = state.calculated;
      let reset = state.reset;
      let history = [...state.history];

      if (reset) {
        history.push([]);
        reset = false;
      }

      if (displayValue === '0' || (displayValue === actualTotal && calculated)) {
        displayValue = action.payload;
        calculated = false;
      } else {
        displayValue = displayValue + action.payload;
      }

      return { ...state, calculated: calculated, displayValue: displayValue, reset: reset, history: history };
    case Action.DeleteLast: {
      let slicedDisplay = state.displayValue.slice(0, -1);

      return { ...state, displayValue: slicedDisplay || '0' };
    }
    case Action.Operation:
      if (state.calculated) {
        let tempHistoryDisplay = state.historyDisplay.slice();
        if (tempHistoryDisplay[tempHistoryDisplay.length - 1]) return state;
      }
      let operation = updateValues(state, action.payload);
      return {
        ...state,
        calculated: true,
        history: operation.history,
        total: operation.total,
        displayValue: operation.total.toString(),
      };
    case Action.Percentace:
      return { ...state, displayValue: ((state.total * parseFloat(state.displayValue)) / 100).toString() };
    case Action.Clean:
      const historyClean = [...state.history];
      if (historyClean[historyClean.length - 1].length > 0) {
        if (state.reset) {
          historyClean.push([]);
        } else {
          historyClean[historyClean.length - 1] = [];
        }
      }
      return { ...state, history: historyClean, displayValue: '0' };
    case Action.Total:
      if (state.reset) {
        return state;
      }

      let total = updateValues(state, '=');
      let totalHistory = [...total.history];

      return {
        ...state,
        reset: true,
        calculated: true,
        history: total.history,
        total: total.total,
        displayValue: total.total.toString(),
        historyDisplay: [
          ...state.historyDisplay,
          {
            operations: totalHistory[totalHistory.length - 1].join(' '),
            total: total.total,
          },
        ],
      };
  }
};

export const CalculatorStore = makeStore(defaultStore, calculatorReducer);
