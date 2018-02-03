import * as types from '../constants/ActionTypes'
import { addUser, messageReceived, populateUsersList } from '../actions'

const setupSocket = (dispatch, username) => { // passing in dispatch allows for dispatch events
  const socket = new WebSocket('ws://localhost:8989')

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username
    }))
  }
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)

    // receive data from an event from the server
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author)) // dispatch the messageReceived action
        break
      case types.ADD_USER:
        dispatch(addUser(data.name))
        break
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  }
}

export default setupSocket