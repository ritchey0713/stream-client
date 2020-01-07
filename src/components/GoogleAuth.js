import React, { Component } from "react"
import ClientObj from "./APIs/ApiSecrets"

class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  }

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: ClientObj.clientId,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({
          isSignedIn: this.auth.isSignedIn.get()
        })
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  //callback
  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    })
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton(){
    if(this.state.isSignedIn === null ){
      return null
    }
    else if (this.state.isSignedIn){
      return(
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          SIGN OUT
        </button>
      )
    } else {
      return(
        <button className="ui blue google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          SIGN IN
        </button>
      )
    }
  }

  render(){
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default GoogleAuth