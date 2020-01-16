import React from "react"
import ReactDOM from "react-dom"
import history from "../history"

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" 
      onClick={() => history.push('/')}
    >
      <div className="ui standard modal visible active" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header"> Delete Stream </div>
        <div className="content">
          Are you sure you want to delete this stream?
          <div className="actions">
            <button class="ui red button"> Delete</button>
            <button class="ui button"> Cancel</button>
          </div>
        </div>
      </div> 
    </div>,

    document.querySelector('#modal')
  )
}

export default Modal