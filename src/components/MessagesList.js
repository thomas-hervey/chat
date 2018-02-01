import React from "React"
import PropTypes from "prop-types";

// functional component that renders messages
const MessagesList = ({ messages }) => (
  <section id="messages-list">
    <ul>
      { messages.map(message => (
        <Messages
          key={ message.id }
          { ...message }
        />
      ))}
    </ul>
  </section>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default MessagesList