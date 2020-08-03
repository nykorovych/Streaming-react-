import React from "react";
import _ from 'lodash'
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions/";
import StreamForm from '../../components/StreamForm'

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues)
  }
  render() {
    if(!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit}></StreamForm>
      </div>
    )
  }
}
const mstp = (state, ownProps) => {
  console.log(state);
  return { stream: state.stream[ownProps.match.params.id] };
};
export default connect(mstp, { fetchStream, editStream })(StreamEdit);
