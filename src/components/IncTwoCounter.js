import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { twoIncCounter } from "../redux/actions/counterActions";

class IncTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(twoIncCounter());
          }}
        >
          2 arttır
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(twoIncCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncTwoCounter);
