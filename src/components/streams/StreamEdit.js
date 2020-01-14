import React, { Component } from "react"
import { connect } from "react-redux"

class StreamEdit extends Component {

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }

  render(){
    return (
      <div>
        StreamEdit
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps)(StreamEdit)