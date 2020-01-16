import React from "react"
import ReactDOM from "react-dom"

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header"> Delete Stream </div>
        <div className="content">
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