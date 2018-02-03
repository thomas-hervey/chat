import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import setupSocket from './sockets'
import reducers from './reducers'
import handleNewMessage from './sagas'
import username from './utils/name'

// the saga middleware handles side effects
const sagaMiddleware = createSagaMiddleware()

// store all data for application, passing in our reducer
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware) // middleware needs to be initialized during store creation
)

// create socket with our dispatch function and username
const socket =setupSocket(store.dispatch, username)

// run middleware and add handleNewMessage function, and our socket
sagaMiddleware.run(handleNewMessage, { socket, username })

ReactDOM.render(
  // hook up store to our app, using a provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
