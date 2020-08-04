import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
      this.props.fetchStream(this.props.match.params.id)
  }
  renderActions() {
    return (
      //   <React.Fragment/> = <> </>
      <>
        <button className="ui button negative">delete</button>
        <button className="ui button ">cancel</button>
      </>
    );
  }
  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete"
          content="Sure?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mstp = (state, ownProps) => {

  return { streamToDelete: state.stream[ownProps.match.params.id] };
};

export default connect(mstp, { fetchStream })(StreamDelete);
