import * as types from "../constants/ActionTypes"

// for reducers, pass in the current state (with a default empty array),
// and an action, and return the new state
const usersReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      // TODO: is concat the best way to update state? don't think so...
      return state.concat([
        { id: action.id, name: action.name }
      ])
    case types.USERS_LIST:
      return action.users
    default:
      return state
  }
}

export default usersReducer