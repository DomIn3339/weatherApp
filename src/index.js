import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { save, load } from "redux-localstorage-simple"
//import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import App from './containers/App';
import rootReducer from './reducers/rootReducer';

const store = createStore(
          rootReducer,
          load({ states: ["cityReducer"]  }),
          compose(applyMiddleware(ReduxThunk),
          //  applyMiddleware(createLogger()),
            applyMiddleware(save({ states: ["cityReducer"]  })),
            window.devToolsExtension ? window.devToolsExtension() : f => f)
          );

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
