import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchStream, editStreams } from "../../actions/index"
import StreamForm from  "./StreamForm"

class StreamEdit extends Component {

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
     this.props.editStreams(this.props.stream.id, formValues)
  }

  render(){
    if(!this.props.stream){
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div>
        <h3>Edit stream</h3>
        <StreamForm 
          initialValues={{ title: this.props.stream.title, description: this.props.stream.description }} 
          onSubmit={this.onSubmit}

        />
      </div>
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
  editStreams
})(StreamEdit)