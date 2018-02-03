import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

// handle a new function from the server asynchronously

// this saga takes every action of type ADD_MESSAGE, send a message
// to the web socket passing in the action and details
// the chat message from a user can be dispatched to all server clients (listeners)

// function* is a generator function, it'll generate something new
const handleNewMessage = function* handleNewMessage(params) {
  // a yeild is needed every time a generator function is called
  yield takeEvery(types.ADD_MESSAGE, action => {
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  })
}

export default handleNewMessage
