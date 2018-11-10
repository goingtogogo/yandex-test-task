import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

import Header from './Header';
import Board from './Board';

const store = configureStore();

export default function () {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <Board />
      </Fragment>
    </Provider>
  );
}
