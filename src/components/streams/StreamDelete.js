import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions() {
    return (
      //   <React.Fragment/> = <> </>
      <>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button negative"
        >
          delete
        </button>
        <Link to="/" className="ui button ">
          cancel
        </Link>
      </>
    );
  }
  renderContent() {
    if (!this.props.streamToDelete) {
      return "Delete stream ?";
    }
    return `SURE ? stream title: ${this.props.streamToDelete.title}`;
  }
  render() {
    return (
      <Modal
        title="Delete"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mstp = (state, ownProps) => {
  return { streamToDelete: state.stream[ownProps.match.params.id] };
};

export default connect(mstp, { fetchStream, deleteStream })(StreamDelete);
