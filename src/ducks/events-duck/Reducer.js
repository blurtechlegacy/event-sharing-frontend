import * as types from "./ActionTypes";

const initialState = {
  eventsList: [],
};
export const events = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EVENTS_SUCCESS:
    console.log("type ", action.type)
    console.log("action.events ", action.events)
      return {
        ...state,
        eventsList: action.events
      };
    default:
      return state;
  }
};

