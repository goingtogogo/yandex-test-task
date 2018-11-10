import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import reducers from '../reducers';
import epics from '../epics';

const epicMiddleware = createEpicMiddleware();

const configureStore = (preloadedState) => {
  const store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(epicMiddleware)),
  );
  epicMiddleware.run(epics);
  return store;
};

export default configureStore;
