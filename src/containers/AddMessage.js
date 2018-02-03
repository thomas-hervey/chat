import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

// connect our mapDispatchToProps to our AddMessage component
// TODO: determine how this is different from 'mapStateToProps'
export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)