import React from "React"
import PropTypes from "prop-types";

// functional component that serves a message by an author
// rendered by the MessageList component
const Message = ({ message, author }) => (
  <p>
    <i>{ author }</i>: { message }
  </p>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message