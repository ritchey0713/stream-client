import React, { Component } from "react"
import ClientObj from "./APIs/ApiSecrets"
import { connect } from 'react-redux'
import { signIn, signOut} from '../actions/index'

class GoogleAuth extends Component {

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: ClientObj.clientId,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  //callback
  onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton(){
    if(this.props.isSignedIn === null ){
      return null
    }
    else if (this.props.isSignedIn){
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

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, {
  signIn, 
  signOut
})(GoogleAuth)