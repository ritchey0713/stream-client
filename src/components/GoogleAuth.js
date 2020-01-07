import React, { Component } from "react"
import ClientObj from "./APIs/ApiSecrets"

class GoogleAuth extends Component {

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: ClientObj.clientId
      })
    })
  }

  render(){
    return (
      <div>
        google auth
      </div>
    )
  }
}

export default GoogleAuth