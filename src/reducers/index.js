import { combineReducers } from 'redux'
import messagesReducer from './messagesReducer'
import usersReducers from './usersReducer'

const chatReducer = combineReducers({
  messagesReducer,
  usersReducers
})

export default chatReducer