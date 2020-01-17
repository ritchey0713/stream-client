import React from "react"
import Modal from "../Modal"

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui red button"> Delete</button>
      <button className="ui button"> Cancel</button>
    </React.Fragment>
  )

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
       />
    </div>
  )
}

export default StreamDelete