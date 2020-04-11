import React, { createContext, useContext, useReducer } from 'react';

export interface IAction<T, Z> {
  type: T;
  payload: Z;
}
export interface IReducer<T, Z> {
  (state: T, action: IAction<Z, any>): T;
}

export function makeStore<T, R, Z>(defaultState: T, reducer: IReducer<T, Z>) {
  const stateContext = createContext({ ...defaultState });
  const dispatchContext = createContext<React.Dispatch<IAction<Z, any>>>(() => {});

  const Provider = ({ children = {} as React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
      <stateContext.Provider value={state}>
        <dispatchContext.Provider value={dispatch}>{children}</dispatchContext.Provider>
      </stateContext.Provider>
    );
  };

  /* eslint-disable react-hooks/rules-of-hooks */

  const useStore = () => useContext<T>(stateContext);
  const dispatch = () => useContext<React.Dispatch<IAction<Z, any>>>(dispatchContext);

  /* eslint-enable react-hooks/rules-of-hooks */

  return { Provider, useStore, dispatch };
}
