import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export const enhanceStore = (reducer, state) => {
  let enhancer = applyMiddleware(thunk);
  if (
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    enhancer = compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  return createStore(reducer, state, enhancer);
};

export const getInitialState = config => ({
  config: {
    ...config
  },
  app: {
    data: {
      name: {
        key: 'name',
        type: 'string',
        label: 'Name',
        value: 'Julien'
      },
      trollo: {
        key: 'trollo',
        type: 'string',
        label: 'Surename',
        value: 'Thoma'
      },
      olo: {
        key: 'olo',
        type: 'bool',
        label: 'troll',
        value: true
      }
    }
  }
});
