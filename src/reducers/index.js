import { combineReducers } from 'redux'
import messagesReducer from './messagesReducer'
import usersReducers from './usersReducer'

const reducers = combineReducers({
  messagesReducer,
  usersReducers
})

export default reducers