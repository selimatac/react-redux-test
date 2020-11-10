import * as actionTypes from "./actionTypes";

export const incCounter = () => ({
  type: actionTypes.INC_COUNTER,
  payload: 1
});

export const decCounter = () => ({
  type: actionTypes.DEC_COUNTER,
  payload: 1
});

export const twoIncCounter = () => ({
  type: actionTypes.TWOINC_COUNTER,
  payload: 2
});
