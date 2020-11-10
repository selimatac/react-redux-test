import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { decCounter } from "../redux/actions/counterActions";

class DecCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(decCounter());
          }}
        >
          1 Azalt
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decCounter, dispatch) };
}

export default connect(mapDispatchToProps)(DecCounter);
