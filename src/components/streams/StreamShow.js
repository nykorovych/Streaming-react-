import React from 'react'
import { connect } from 'react-redux'
import { fetchStream }from '../../actions'


 class StreamShow extends React.Component {
     componentDidMount() {
         this.props.fetchStream(this.props.match.params.id)
     }
     
    render() {
        if(!this.props.stream) {
            return <div>LOading</div>
        }
        return (
            <div>
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
            </div>
        )
    }
}

const mstp = (state, ownProps) => {
    return { stream: state.stream[ownProps.match.params.id]}
}
export default connect(mstp, {fetchStream}) (StreamShow)