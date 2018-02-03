import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList'

// connect our messages state to our MessagesList component
// TODO: determine how this is different from 'mapStateToProps'
export const MessagesList = connect(state => ({
	messages: state.messages
}), {})(MessagesListComponent)