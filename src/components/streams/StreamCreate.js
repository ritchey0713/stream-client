import React, { Component } from "react"
import { Field, reduxForm } from 'redux-form'


class StreamCreate extends Component{
  
  renderInput = ({ input, label }) => {
    return(
      <div>
        <label>{label}</label>
        <input 
          {...input }
        />
      </div>
      
    )
  }

  onSubmit = (formValues) => {
    console.log(formValues)
  }

  render(){
    return (
      <div>
        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} label="Enter Title"/>
          <Field name="description" component={this.renderInput} label="Enter Description" />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    )

  }
}

const validate = (formValues) => {
  const errors = {}
  if(!formValues.title){
    errors.title = "Must provide a title"
  }

  if (!formValues.description ){
    errors.description = "Must provide a description"
  }

  return errors
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate)