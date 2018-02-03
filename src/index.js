import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { addUser } from './actions'
import reducers from './reducers'

const store = createStore(reducers) // store all data for application, passing in our reducer

store.dispatch(addUser('Me')) // register myself as present in the chat

ReactDOM.render(
  // hook up store to our app, using a provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
