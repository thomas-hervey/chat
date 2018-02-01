import React from "React"
import PropTypes from "prop-types";

// functional component that creates an input field in
// the new message section of the page
const AddMessage = (props) => {
  let input

  return(
    <section id="new-message">
      <input
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            // dispatch input message value, and the user
            props.dispatch(input.value, 'Me')
            input.value = ''
          }
        }}
        type="text"
        ref{(node) => { input = node }}
      />
    </section>
  )
}

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage