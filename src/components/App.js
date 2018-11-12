import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import 'normalize.css';
import configureStore from '../store/configureStore';

import Board from './Board';

const store = configureStore();

export default function () {
  return (
    <Provider store={store}>
      <Fragment>
        <Board />
      </Fragment>
    </Provider>
  );
}
