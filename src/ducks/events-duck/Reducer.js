import * as types from "./ActionTypes";
import data from "../../data";
const initialState = {
  eventsList: data,
};
export const events = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EVENTS_SUCCESS:
    // console.log("type ", action.type)
    // console.log("action.events ", action.events)
    //   return {
    //     ...state,
    //     eventsList: action.events
    //   };
    default:
      return state;
  }
};

