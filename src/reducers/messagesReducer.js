import * as types from "../constants/ActionTypes"

// for reducers, pass in the current state (with a default empty array),
// and an action, and return the new state
const messagesReducer = (state = [], action) => {
  switch (action.type) {
    // both add message & message received simply concats a new message
    // onto the existing state
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      // TODO: is concat the best way to update state? don't think so...
      return state.concat([
        {
          id: action.id,
          message: action.message,
          author: action.author,
        }
      ])



    default:
      return state
  }
}

export default messagesReducer