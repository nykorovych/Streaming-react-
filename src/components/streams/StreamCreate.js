import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  //   renderInput(formProps) {
  //     console.log(formProps); ?__________________________________
  //     return (
  //       <input
  //         onChange={formProps.input.onChange}
  //         value={formProps.input.value}
  //       ></input>
  //     );
  //   }
  renderInput(formProps) {
    console.log(formProps);
    return <input {...formProps.input} />;
  }
  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput}></Field>
        <Field name="description" component={this.renderInput}></Field>
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
