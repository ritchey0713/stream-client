import React, { Component } from "react"
import { Field, reduxForm } from 'redux-form'


class StreamForm extends Component{
  
  renderError = ({ error, touched }) => {
    if(error && touched){
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const classError = `field ${meta.error && meta.touched ? "error" : ""}`
    
    return(
      <div className={classError}>
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
    this.props.onSubmit(formValues)
  }

  render(){
    return (
      <div>
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
  form: 'streamForm',
  validate
})(StreamForm)
