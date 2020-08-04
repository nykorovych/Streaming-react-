import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  
  //   renderInput(formProps) {
  //     console.log(formProps); ?__________________________________
  //     return (
  //       <input
  //         onChange={formProps.input.onChange}
  //         value={formProps.input.value}
  //       ></input>
  //     );
  //   }
  renderError = (formProps) =>{
    if( formProps.meta.touched && formProps.meta.error) {
        return (
            <div className="ui error message">
                <div className="header">{formProps.meta.error} </div>
            </div>
        )
    }
  }
  renderInput = (formProps) => {
      const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
    return (

      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off"/>
       {this.renderError(formProps)}
      </div>
    );
  }
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter a name"
        ></Field>
        <Field
          name="description"
          component={this.renderInput}
          label="Enter a description"
        ></Field>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = " Enter  a title";
  }
  if (!formValues.description) {
    errors.description = "Must be a description";
  }
  return errors;
};
export default reduxForm({
  form: "streamForm",
  validate: validate,
})(StreamForm);
