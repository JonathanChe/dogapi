import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import dogReducer from '../reducers/dogs';

const configureStore = (preloadedState) => {
  const store = createStore(
    dogReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

export default configureStore;
