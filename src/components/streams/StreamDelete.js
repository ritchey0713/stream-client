import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import Modal from "../Modal"
import history from "../../history"
import { fetchStream, deleteStream } from "../../actions/index"

class StreamDelete extends Component {

  componentDidMount(){
    // grabs data on a browser refresh
    this.props.fetchStream(this.props.match.params.id)
  }

  renderActions = () => {
    return (
      <React.Fragment>
        <button onClick={(e) => {this.props.deleteStream(this.props.stream.id)}} className="ui red button"> Delete</button>
        <Link to="/" className="ui button"> Cancel</Link>
      </React.Fragment>
    )
  }

  renderContent = () => {
    if(!this.props.stream) {
      return "Loading..."
    } else {
      return `Are you sure you want to delete stream titled: ${this.props.stream.title}`
    }
  }
  
  render(){
    
    return (
        <Modal
          title="Delete stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
         />
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { 
  fetchStream,
  deleteStream
 })(StreamDelete)