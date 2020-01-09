import React, { Component } from "react"
import { Field, reduxForm } from 'redux-form'


class StreamCreate extends Component{
  
  renderError = ({ error, touched }) => {
    if(error && touched){
      return (
        <div className="ui error message">
          <div>

          </div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return(
      <div>
        <label>{label}</label>
        <input 
          {...input }
          autoComplete="off"
        />
        {this.renderError(meta)}
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