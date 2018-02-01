import * as types from '../constants/ActionTypes'

let nextMessageId = 0
const nextUserId = 0

// current user adds a message
export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

// a new user has been added to the group
export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

// other users send messages
export const messageReceived = (message, author) => ({
  types: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})