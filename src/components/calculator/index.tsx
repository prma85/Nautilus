import React from 'react';

import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';

import {AppContainer} from './views';
import {RootReducer} from './reducers';
import {initialState} from './actions';


import './styles/index.scss'

let store = createStore(RootReducer, initialState, (window as any).devToolsExtension && (window as any).devToolsExtension());

export default () => {
  return (
    <Provider store={store} >
    <AppContainer />
    </Provider>
  )
}