import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item">
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>STREAM</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}
const mstp = (state) => {
  return { streams: Object.values(state.stream) };
};

export default connect(mstp, { fetchStreams })(StreamList);
