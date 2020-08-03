import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "../StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

//   renderInput(formProps) {
//     console.log(formProps); ?__________________________________
//     return (
//       <input
//         onChange={formProps.input.onChange}
//         value={formProps.input.value}
//       ></input>
//     );
//   }
// renderError = (formProps) =>{
//   if( formProps.meta.touched && formProps.meta.error) {
//       return (
//           <div className="ui error message">
//               <div className="header">{formProps.meta.error} </div>
//           </div>
//       )
//   }
// }
