import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import App from './containers/App';
import rootReducer from './reducers/rootReducer';

//const initialState = {
//  cities: [],
//  activeCity: {}
//};

const store = createStore(
          rootReducer,
          {},
          compose(applyMiddleware(ReduxThunk),
            applyMiddleware(createLogger()),
          window.devToolsExtension ? window.devToolsExtension() : f => f)
          );



render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
