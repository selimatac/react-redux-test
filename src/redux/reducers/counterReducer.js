import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INC_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DEC_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.TWOINC_COUNTER:
      return (newState = state + action.payload);
    default:
      return state;
  }
};

export default counterReducer;
