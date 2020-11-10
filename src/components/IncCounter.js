import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incCounter } from "../redux/actions/counterActions";

class IncCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(incCounter());
          }}
        >
          1 Arttır
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(incCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncCounter);
