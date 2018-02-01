import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import chat from './reducers'

const store = createStore(chat) // store all data for application, passing in our reducer


ReactDOM.render(
  // hook up store to our app, using a provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
